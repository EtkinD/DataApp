// ========== Environment Setup ==========
import { config } from 'dotenv';
config();

// ========== ExpressJS Setup ==========
import { applyMiddleWare, configureRoutes, startServer } from './src/express';

applyMiddleWare(process.env.STATIC_DIR);
configureRoutes();
startServer(Number(process.env.PORT), String(process.env.HOST));
