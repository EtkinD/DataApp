import routeTests from './routes/index.test';
import staticFileTests from './static.test';

function expressTests() {
    describe('Express Tests', () => {
        staticFileTests();
        routeTests();
    });
}

export default expressTests;
