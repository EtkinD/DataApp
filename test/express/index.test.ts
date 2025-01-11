import { config } from 'dotenv';
import { applyMiddleWare, configureRoutes } from '../../src/express';
import routeTests from './routes/index.test';
import staticFileTests from './static.test';

describe("Express Tests", () => {
    before(() => {
        // Config: Environment variables
        config({ path: './envs/.env.dev' });
        // Config: Express
        applyMiddleWare(process.env.STATIC_DIR);
        configureRoutes();
    });

    staticFileTests();
    routeTests();
});