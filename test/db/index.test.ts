import { config } from 'dotenv';
import { connectDatabase, dbClient } from '../../src/database';
import actionTests from './actions/index.test';

describe('Database Tests', () => {
    before(async () => {
        // Config: Environment variables
        config({ path: './envs/.env.dev' });
        // Config: Database
        const conRes = await connectDatabase()
            .then(() => true)
            .catch(() => false);
        if (!conRes) throw new Error('Failed to connect to the database');
    });

    actionTests();

    after(() => dbClient.end());
});
