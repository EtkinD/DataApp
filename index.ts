// ========== Environment Setup ==========
import { config } from 'dotenv';
config();

// ========== Start the Server ==========
import { connectDatabase } from './src/database';
import { applyMiddleWare, configureRoutes, startServer } from './src/express';

async function main() {
    // ===== Database Setup =====
    const conRes = await connectDatabase();
    if (!conRes) {
        console.error('Failed to connect to the database');
        return;
    }

    // ===== ExpressJS Setup =====
    applyMiddleWare();
    configureRoutes();
    startServer();
}

main();
