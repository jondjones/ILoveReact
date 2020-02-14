import path from 'path';
import express, { Router } from 'express';
import createCacheControl from '@ynap/express-cache-control';
import createLocaleParser from '@ynap/express-locale-parser';
import legacyMocks from '@ynap/myaccount-mocks';
import wcsMocks from '@ynap/wcs-mocks';
import account from './account';
import config from '../config';
import requestAndLog from '../requestAndLog';
import ping from './ping';
import localeReducer from '../localeReducer';

const router = Router();
const preventCaching = createCacheControl();
const localeParser = createLocaleParser({ ...config.countryService, request: requestAndLog, reducer: localeReducer });

router.get('/admin/ping', [preventCaching], ping);
router.use('/:locale/account', [preventCaching, localeParser], account);

if (config.useMocks) {
    router.use(wcsMocks);
    router.use(legacyMocks);
}

if (config.env === 'development') {
    router.use('/assets', express.static(path.join(__dirname, '../../assets')));
}

export default router;
