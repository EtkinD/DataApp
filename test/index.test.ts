import { config } from 'dotenv';
import { connectDatabase, dbClient } from '../src/database';
import { setupExpress } from '../src/express';
import databaseTests from './db/index.test';
import expressTests from './express/index.test';
import utilTests from './util/index.test';

describe('', () => {
    // ===== Before =====
    before('Setup: Environment', function () {
        config();
    });

    before('Setup: Database', async function () {
        const conRes = await connectDatabase();
        if (!conRes) throw new Error('Database connection failed');
    });

    before('Setup: Express', function () {
        setupExpress();
    });

    // ===== After =====
    after('Teardown: Database', function () {
        dbClient?.end();
    });

    // ===== Tests =====
    utilTests();
    databaseTests();
    expressTests();
});
