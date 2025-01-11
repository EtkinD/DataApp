import { genSaltSync, hashSync, compareSync } from 'bcrypt';

const saltRounds = 1;

function hash(password: string) {
    const salt = genSaltSync(saltRounds);
    return hashSync(password, salt);
};

function compare(password: string, hash: string) {
    return compareSync(password, hash);
};

export default { hash, compare };
export { hash, compare };