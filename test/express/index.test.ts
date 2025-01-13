import { config } from 'dotenv';
import { connectDatabase, dbClient } from '../../src/database';
import { applyMiddleWare, configureRoutes } from '../../src/express';
import routeTests from './routes/index.test';
import staticFileTests from './static.test';

describe('Express Tests', () => {
    before(async () => {
        // Config: Environment variables
        config({ path: './envs/.env.dev' });
        // Config: Database
        const conRes = await connectDatabase();
        if (!conRes) {
            console.error('Failed to connect to the database');
            return new Error('Failed to connect to the database');
        }
        // Config: Express
        applyMiddleWare(process.env.STATIC_DIR);
        configureRoutes();
        return null;
    });

    after(async () => {
        await dbClient.end();
        return null;
    });

    staticFileTests();
    routeTests();
});
