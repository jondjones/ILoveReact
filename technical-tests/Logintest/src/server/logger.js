import pino, { stdSerializers } from 'pino';
import config from './config';
import { name } from '../../package.json';

const pretty = pino.pretty();
pretty.pipe(process.stdout);

function req(request) {
    if (!request || !request.connection) return request;

    return {
        method: request.method,
        url: request.url,
        headers: request.headers,
        remoteAddress: request.connection.remoteAddress,
        remotePort: request.connection.remotePort
    };
}

export default pino({
    name,
    level: config.logger.level,
    serializers: {
        req,
        res: stdSerializers.res,
        err: stdSerializers.err
    }
}, config.logger.pretty ? pretty : null);
