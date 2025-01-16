import { assert } from 'chai';
import { compare } from '../../../src/util/hashing';
import { randomUserEntity } from '../../../src/util/random';

function randomUserTest() {
    describe('UserEntity', () => {
        it('should generate 30 + 1 random user entity', () => {
            for (let i = 0; i < 30 + 1; i++) {
                const user = randomUserEntity();
                assert.isNumber(user.id);
                assert.isAbove(user.id, 0);
                assert.isString(user.name);
                assert.isString(user.last_name);
                assert.isString(user.username);
                assert.isString(user.password);
                assert.isTrue(compare(user.originalPassword, user.password));
                assert.isString(user.email);
                assert.instanceOf(user.joined_at, Date);
                assert.instanceOf(user.last_login_at, Date);
                assert.instanceOf(user.last_activity_at, Date);
                assert.isUndefined(user.personal_id);
                assert.isUndefined(user.profile_id);
            }
        });
    });
}

export default randomUserTest;
