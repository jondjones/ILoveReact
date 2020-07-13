import request from 'request';
import { wrapRequestWithLogger } from '@ynap/logging-utils';
import config from './config';
import logger from './logger';

export default wrapRequestWithLogger(request.defaults(config.peerRequest), logger);
