import { assert } from 'chai';
import { randomWord } from '../../../src/util/random';

function randomWordTest() {
    describe('Word', () => {
        it('should generate 30 + 1 random words', () => {
            for (let i = 0; i < 30 + 1; i++) {
                const randMin = Math.floor(Math.random() * 10) + 2;
                const randMax = randMin + Math.floor(Math.random() * 10) + 1;
                const word = randomWord(randMin, randMax);

                assert.isString(word);
                assert.isAtLeast(word.length, randMin);
                assert.isAtMost(word.length, randMax);
                assert.match(word, /^[A-Z][a-z]+$/);
            }
        });
    });
}

export default randomWordTest;
