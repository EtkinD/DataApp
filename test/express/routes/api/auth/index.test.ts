import { RegisterRequest } from '../../../../../src/types/request/auth';
import { randomUserEntity } from '../../../../../src/util/random';
import loginTest from './login.test';
import registerTest from './register.test';

const authTests = () => {
    const testBody = randomUserEntity();

    const req = {
        name: testBody.name,
        last_name: testBody.last_name,
        email: testBody.email,
        username: testBody.username,
        password: testBody.originalPassword,
    } as RegisterRequest;

    describe('/register', () => registerTest(req));
    describe('/login', () => loginTest(req));
};

export default authTests;
