import express from 'express';
import { getApiUrl, getHost, getPort, getStaticFolder } from '../util/environ';
import routes from './routes';

const app = express();

// TODO (Etkin): Join applyMiddleWare and configureRoutes into a single function
/**
 * Applies the middleware to the express app
 */
export function applyMiddleWare(): void {
    // To be able to read the body of the request
    app.use(express.json());

    // Serve static files if the public folder is provided
    app.use(express.static(getStaticFolder()));
}

/**
 * Configures the routes for the express app
 */
export function configureRoutes(): void {
    app.use(routes);
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
