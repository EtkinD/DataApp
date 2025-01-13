import randomUserTest from './user.test';
import randomWordTest from './word.test';

function randomTests() {
    describe('Random', () => {
        randomWordTest();
        randomUserTest();
    });
}

export default randomTests;
