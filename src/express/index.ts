import express from 'express';
import { getApiUrl, getHost, getPort, getStaticFolder } from '../util/environ';
import routes from './routes';

const app = express();

/**
 * Sets up the express server
 * with middleware, routes, static files, and error handling
 */
export function setupExpress(): void {
    // Middleware
    app.use(express.json());
    // Routes
    app.use(routes);
    // Static files
    app.use(express.static(getStaticFolder()));
    // Error handling
    // TODO: Implement error handling
}

/**
 * Starts the express server
 */
export function startServer(): void {
    app.listen(getPort(), getHost(), () => {
        console.log(`[HTTP][S] Server started at ${getApiUrl()}`);
    });
}

export { app as expressApp };
