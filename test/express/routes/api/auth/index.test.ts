import { config } from 'dotenv';
import { applyMiddleWare, configureRoutes } from '../../../../../src/express';
import loginTest from './login.test';
import registerTest from './register.test';


describe("Express /api/auth", () => {

    before(() => {
        // Config: Environment variables
        config({ path: './envs/.env.dev' });
        // Config: Express
        applyMiddleWare(process.env.STATIC_DIR);
        configureRoutes();
    });

    const testBody = {
        username: "etkin.dogan",
        name: "Etkin",
        lastName: "Dogan",
        email: 'etkin.dogan@hotmail.com',
        password: '123456',
    };


    registerTest(testBody);
    loginTest(testBody);
});