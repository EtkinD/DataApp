import { Router } from 'express';
import authRouter from './auth';

// PATH: /api
const router = Router();

router.use('/auth', authRouter); // PATH: /api/auth

export default router;
