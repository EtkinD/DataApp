import userPersonalTests from './personal.test';
import userProfileTests from './profile.test';
import userEntityTests from './user.test';

function userTests() {
    describe('User Tests', () => {
        userEntityTests();
        userProfileTests();
        userPersonalTests();
    });
}

export default userTests;
