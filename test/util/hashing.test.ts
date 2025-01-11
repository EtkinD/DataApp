import { assert } from 'chai';
import { compare, hash } from '../../src/util/hashing';

describe('Hashing', () => {
    const password = 'my-very-secure-password';

    it('should hash and compare a string', () => {
        const hashedPassword = hash(password);

        assert.notEqual(
            hashedPassword,
            password,
            'The hashed password should not be the same as the original password',
        );
        assert.isString(
            hashedPassword,
            'The hashed password should be a string',
        );
        assert.isAbove(
            hashedPassword.length,
            0,
            'The hashed password should not be empty',
        );

        const compareResult = compare(password, hashedPassword);
        assert.isTrue(compareResult, 'The compare function should return true');
    });
});
