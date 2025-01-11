import { Client } from 'pg';
import actions from './actions';

const DB_URL = process.env.DATABASE_URL || process.env.NOODE_DATABASE_URL;
const client = new Client({
    connectionString: DB_URL,
});

/**
 * Connect to the database by using the url provided in the environment variables.
 */
async function connectDatabase(): Promise<boolean> {
    let result: boolean;

    await client
        .connect()
        .then(() => {
            console.log('Connected to the database');
            result = true;
        })
        .catch((err) => {
            console.error('Error connecting to the database', err);
            result = false;
        });

    return new Promise((resolve) => resolve(result));
}

export { connectDatabase, actions as dbActions, client as dbClient };
