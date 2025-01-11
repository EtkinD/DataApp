import { randomUserEntity } from '../../../../../src/util/random';
import loginTest from './login.test';
import registerTest from './register.test';

const authTests = () => {
    const testBody = randomUserEntity();

    describe('/register', () => registerTest(testBody));
    describe('/login', () => loginTest(testBody));
};

export default authTests;
