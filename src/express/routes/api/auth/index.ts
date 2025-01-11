import { Router } from 'express';
import { UserEntity } from '../../../../types/db/user';
import login from './login';
import register from './register';

// PATH: /api/auth
const router = Router();

router.post('/login', login); // PATH: /api/auth/login
router.post('/register', register); // PATH: /api/auth/register

export default router;

// TODO: Remove this temporary object after implementing database
// Temporary object to store user data
const users: Array<UserEntity> = [];
export { users };
