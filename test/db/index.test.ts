import actionTests from './actions/index.test';

function databaseTests() {
    describe('Database Tests', () => {
        actionTests();
    });
}

export default databaseTests;
