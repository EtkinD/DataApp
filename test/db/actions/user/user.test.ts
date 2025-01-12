import { assert } from 'chai';
import { dbActions } from '../../../../src/database';
import { randomUserEntity } from '../../../../src/util/random';

function userEntityTests() {
    describe('UserEntity', () => {
        const users = [];

        it('should generate 10 random user', async () => {
            const promises = [];

            for (let i = 0; i < 10; i++) {
                const user = randomUserEntity();
                users.push(user);
                promises.push(dbActions.userActions.user.createUser(user));
            }

            const results = await Promise.all(promises);

            assert.isArray(results);
            assert.lengthOf(results, 10);
            results.forEach((user) => {
                assert.isObject(user);
                if (user === null) return; // To avoid the linter warning.

                assert.isNumber(user.id, 'id is not a number');
                assert.isAbove(user.id, 0, 'id is not above 0');
                assert.isString(user.name, 'name is not a string');
                assert.isString(user.last_name, 'lastName is not a string');
                assert.isString(user.username, 'username is not a string');
                assert.isString(user.password, 'password is not a string');
                assert.isString(user.email, 'email is not a string');
                assert.instanceOf(
                    user.join_date,
                    Date,
                    'joinDate is not a Date',
                );
                assert.instanceOf(
                    user.last_login,
                    Date,
                    'lastLogin is not a Date',
                );
                assert.instanceOf(
                    user.last_activity,
                    Date,
                    'lastActivity is not a Date',
                );
                assert.isNull(user.personal_id, 'personalId is not undefined');
                assert.isNull(user.profile_id, 'profileId is not undefined');
            });

            return results;
        }).timeout(5000); // It can take a while to generate 10 random users. So, we need to increase the timeout.

        it('should get generated users by id', async () => {
            // TODO: Implement this test.
        });

        it('should get generated users by email', async () => {
            // TODO: Implement this test.
        });

        it('should get generated users by username', async () => {
            // TODO: Implement this test.
        });

        it('should list all users', async () => {
            // TODO: Implement this test.
        });

        it('should update generated users', async () => {
            // TODO: Implement this test.
        });
    });
}

export default userEntityTests;
