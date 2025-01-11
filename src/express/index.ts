import express from 'express';
import routes from './routes';

const app = express();

/**
 * Applies the middleware to the express app
 * @param publicFolder The folder where the static files are located
 */
export function applyMiddleWare(publicFolder?: string): void {
    // To be able to read the body of the request
    app.use(express.json());

    // Serve static files if the public folder is provided
    if (publicFolder) app.use(express.static(publicFolder));
}

/**
 * Configures the routes for the express app
 */
export function configureRoutes(): void {
    app.use(routes);
}

/**
 * Starts the express server on the specified port and host
 * @param port port number
 * @param host host name
 */
export function startServer(port: number, host: string): void {
    app.listen(port, host, () => {
        console.log(`[HTTP][S] Server started at http://${host}:${port}`);
    });
}

export { app as expressApp };
