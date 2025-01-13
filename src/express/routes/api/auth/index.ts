import { Router } from 'express';
import login from './login';
import register from './register';

// PATH: /api/auth
const router = Router();

router.post('/login', login); // PATH: /api/auth/login
router.post('/register', register); // PATH: /api/auth/register

export default router;
