import { assert } from 'chai';
import { dbActions, dbClient } from '../../../../src/database';
import { UserEntity } from '../../../../src/types/db';
import { randomUserEntity } from '../../../../src/util/random';

function userEntityTests() {
    describe('UserEntity', () => {
        const users: Array<UserEntity> = [];

        before('Create 10 random users', function () {
            for (let i = 0; i < 10; i++) {
                const user = randomUserEntity();
                users.push(user);
            }
        });

        it('should generate 10 random user', async function () {
            const promises: Array<Promise<UserEntity | null>> = [];

            for (const user of users)
                promises.push(
                    dbActions.userActions.user.createUser(user as UserEntity),
                );

            const results = await Promise.all(promises);

            assert.isArray(results);
            assert.lengthOf(results, 10);

            for (const user of results) {
                assert.isObject(user, 'one of the users is not an object');
                if (user === null) return; // To avoid the linter warning.

                assert.isNumber(user.id, 'id is not a number');
                assert.isAbove(user.id, 0, 'id is not above 0');
                assert.isString(user.name, 'name is not a string');
                assert.isString(user.last_name, 'lastName is not a string');
                assert.isString(user.username, 'username is not a string');
                assert.isString(user.password, 'password is not a string');
                assert.isString(user.email, 'email is not a string');
                assert.instanceOf(
                    user.joined_at,
                    Date,
                    'joinDate is not a Date',
                );
                assert.instanceOf(
                    user.last_login_at,
                    Date,
                    'lastLogin is not a Date',
                );
                assert.instanceOf(
                    user.last_activity_at,
                    Date,
                    'lastActivity is not a Date',
                );
                assert.isNull(user.personal_id, 'personalId is not undefined');
                assert.isNull(user.profile_id, 'profileId is not undefined');

                // update the user object
                const index = users.findIndex((u) => u.email === user.email);
                users[index] = user;
            }
        });

        // it('should get generated users by id', async () => {
        //     // TODO: Implement this test.
        // });

        // it('should get generated users by email', async () => {
        //     // TODO: Implement this test.
        // });

        // it('should get generated users by username', async () => {
        //     // TODO: Implement this test.
        // });

        // it('should list all users', async () => {
        //     // TODO: Implement this test.
        // });

        // it('should update generated users', async () => {
        //     // TODO: Implement this test.
        // });

        after('Delete all generated users', async function () {
            const ids: number[] = [];
            for (const user of users) ids.push(user.id);

            // TODO: Querying here is not the best approach. It would be better to use the userActions to delete the users. Move this to the userActions test later.
            await dbClient?.query(
                `DELETE FROM userdata.users WHERE id IN (${ids.join(',')})`,
            );
        });
    });
}

export default userEntityTests;
