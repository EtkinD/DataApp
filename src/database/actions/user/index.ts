import {
    createUser,
    getUserByEmail,
    getUserById,
    getUserByUsername,
    listUsers,
    updateUser,
} from './user';

export default {
    user: {
        createUser,
        getUserById,
        getUserByEmail,
        getUserByUsername,
        listUsers,
        updateUser,
    },
    profile: {},
    personal: {},
};
