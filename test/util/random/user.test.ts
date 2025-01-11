import { assert } from 'chai';
import { compare } from '../../../src/util/hashing';
import { randomUserEntity } from '../../../src/util/random';

function randomUserTest() {
    describe('UserEntity', () => {
        it('should generate 666 random user entity', () => {
            for (let i = 0; i < 666; i++) {
                const user = randomUserEntity();
                assert.isNumber(user.id);
                assert.isAbove(user.id, 0);
                assert.isString(user.name);
                assert.isString(user.lastName);
                assert.isString(user.username);
                assert.isString(user.password);
                assert.isTrue(compare(user.originalPassword, user.password));
                assert.isString(user.email);
                assert.instanceOf(user.joinDate, Date);
                assert.instanceOf(user.lastLogin, Date);
                assert.instanceOf(user.lastActivity, Date);
                assert.isUndefined(user.personalId);
                assert.isUndefined(user.profileId);
            }
        }).timeout(5000); // It can take a while to generate 666 random users. So, we need to increase the timeout.
    });
}

export default randomUserTest;
