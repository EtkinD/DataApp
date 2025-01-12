import { Client } from 'pg';
import actions from './actions';

const DB_URL = process.env.DATABASE_URL || process.env.NOODE_DATABASE_URL;
let client: Client = new Client({
    connectionString: DB_URL,
});

/**
 * Connect to the database by using the url provided in the environment variables.
 */
async function connectDatabase(): Promise<boolean> {
    let result: boolean;

    // TODO (Etkin): IDK why but when I run the tests, the DB_URL is undefined. So, I need to check it here.
    // Update here if you find a better solution.
    if (!DB_URL) {
        client = new Client({
            connectionString:
                process.env.DATABASE_URL || process.env.NOODE_DATABASE_URL,
        });
    }

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
