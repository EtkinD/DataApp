import { Router } from 'express';
import apiRouter from './api';

// PATH: /
const router = Router();

router.use('/api', apiRouter); // PATH: /api

export default router;
