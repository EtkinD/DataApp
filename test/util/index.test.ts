import hashingTest from './hashing.test';
import jwtTest from './jwt.test';
import randomTests from './random/index.test';

function utilTests() {
    describe('Util tests', () => {
        randomTests();
        hashingTest();
        jwtTest();
    });
}

export default utilTests;
