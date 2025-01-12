import userTests from './user/index.test';

function actionTests() {
    describe('Actions', () => {
        userTests();
    });
}

export default actionTests;
