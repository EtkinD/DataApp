import loginTest from './login.test';
import registerTest from './register.test';

const authTests = () => {
    const testBody = {
        username: 'etkin.dogan',
        name: 'Etkin',
        lastName: 'Dogan',
        email: 'etkin.dogan@hotmail.com',
        password: '123456',
    };

    describe('/register', () => registerTest(testBody));
    describe('/login', () => loginTest(testBody));
};

export default authTests;
