import { assert } from 'chai';
import { generateToken, verifyToken } from '../../src/util/jwt';

function jwtTest() {
    describe('JWT', () => {
        const payload = { id: 1, name: 'John', lastName: 'Doe' };
        let token: string;

        it('should generate a token', () => {
            token = generateToken(payload);

            assert.isString(token, 'The token should be a string');
            assert.isAbove(token.length, 0, 'The token should not be empty');
        });

        it('should verify a token', () => {
            const decoded = verifyToken(token);

            assert.isObject(decoded, 'The decoded token should be an object');
            assert.propertyVal(decoded, 'id', payload.id);
            assert.propertyVal(decoded, 'name', payload.name);
            assert.propertyVal(decoded, 'lastName', payload.lastName);
        });
    });
}

export default jwtTest;
