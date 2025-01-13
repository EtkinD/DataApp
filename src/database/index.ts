import { Client } from 'pg';
import { getDbUrl } from '../util/environ';
import actions from './actions';

let client: Client | undefined;

/**
 * Connect to the database using the URL provided in the environment variables.
 */
async function connectDatabase(): Promise<boolean> {
    if (getDbUrl() === undefined) {
        console.error('Database URL is not defined');
        return false;
    }

    client = new Client({
        connectionString: getDbUrl(),
    });

    let result: boolean = false;
    await client
        .connect()
        .then(() => {
            console.log(`[HTTP][D] Connected to the database at ${getDbUrl()}`);
            result = true;
        })
        .catch((err) => {
            console.error('[HTTP][D] Error connecting to the database', err);
            console.error('[HTTP][D] Database URL:', getDbUrl());
            result = false;
        });

    return result;
}

export { connectDatabase, actions as dbActions, client as dbClient };
