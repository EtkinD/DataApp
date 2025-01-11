import authTests from './auth/index.test';

const apiTests = () => {
    describe('/auth', authTests);
};

export default apiTests;
