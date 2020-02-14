import 'isomorphic-fetch';
import cookieParser from 'cookie-parser';
import express from 'express';
import http from 'http';
import path from 'path';
import remoteHandlebars from 'express-remote-handlebars';
import createErrorHandler from '@ynap/express-error-handler';
import { createLoggerMiddleware } from '@ynap/express-logging-middleware';
import { monitorMemoryUsage, monitorEventLoop, monitorGC, monitorCPUUsage } from '@ynap/logging-utils';

import config from './config';
import logger from './logger';
import requestAndLog from './requestAndLog';
import routes from './routes';

const errorMiddleware = createErrorHandler(logger);
const loggerMiddleware = createLoggerMiddleware(logger);
const app = express().disable('x-powered-by').disable('etag');

app.engine('handlebars', remoteHandlebars({ ...config.siteFurnitureService, request: requestAndLog }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set('view cache', true);

app.use(loggerMiddleware);
app.use(cookieParser());
app.use(routes);
app.use((req, res) => res.type('text/html').status(404).end());
app.use(errorMiddleware);

const server = http.createServer(app).listen(config.server.port, () => {
    logger.info({
        port: config.server.port,
        env: config.env
    }, 'My Account app listening:');
});

const MONITORING_INTERVAL = 60 * 1000;

const stopEventMonitor = monitorEventLoop(logger, MONITORING_INTERVAL);
const stopMemoryMonitor = monitorMemoryUsage(logger, MONITORING_INTERVAL);
const stopCPUMonitor = monitorCPUUsage(logger, MONITORING_INTERVAL);
const stopGCMonitor = monitorGC(logger, MONITORING_INTERVAL);

server.on('close', stopEventMonitor);
server.on('close', stopMemoryMonitor);
server.on('close', stopCPUMonitor);
server.on('close', stopGCMonitor);
