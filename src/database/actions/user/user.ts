import { dbClient } from '../..';
import { UserEntity } from '../../../types/db/user';

// ========== CRUD ==========
// ===== Create =====
export const createUser = async (
    user: UserEntity,
): Promise<UserEntity | null> => {
    const { username, name, last_name, email, password } = user;
    const query = `
        INSERT INTO users (username, name, last_name, email, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [username, name, last_name, email, password];

    if (dbClient === undefined) {
        console.error('Database client is not defined');
        return null;
    }

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

// ===== Read =====
export const getUserById = async (id: number): Promise<UserEntity | null> => {
    const query = `
        SELECT * FROM users
        WHERE id = $1;
    `;
    const values = [id];

    if (dbClient === undefined) {
        console.error('Database client is not defined');
        return null;
    }

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

export const getUserByEmail = async (
    email: string,
): Promise<UserEntity | null> => {
    const query = `
        SELECT * FROM users
        WHERE email = $1;
    `;
    const values = [email];

    if (dbClient === undefined) {
        console.error('Database client is not defined');
        return null;
    }

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

export const getUserByUsername = async (
    username: string,
): Promise<UserEntity | null> => {
    const query = `
        SELECT * FROM users
        WHERE username = $1;
    `;
    const values = [username];

    if (dbClient === undefined) {
        console.error('Database client is not defined');
        return null;
    }

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

export const listUsers = async (): Promise<Array<UserEntity>> => {
    const query = `SELECT * FROM users;`;

    if (dbClient === undefined) {
        console.error('Database client is not defined');
        return [];
    }

    const { rows, rowCount } = await dbClient.query(query);

    if (rowCount === 0) return [];
    return rows as Array<UserEntity>;
};

// ===== Update =====
export const updateUser = async (
    id: number,
    user: UserEntity,
): Promise<UserEntity | null> => {
    const values = [
        user.username,
        user.name,
        user.last_name,
        user.email,
        user.password,
        user.join_date,
        user.last_activity,
        user.last_login,
        user.personal_id,
        user.profile_id,
        user.id,
    ];
    const query = `
        UPDATE users
        SET username = $1, name = $2, last_name = $3, email = $4, password = $5, join_date = $6, last_activity = $7, last_login = $8, personal_id = $9, profile_id = $10
        WHERE id = $11
        RETURNING *;
    `;

    if (dbClient === undefined) {
        console.error('Database client is not defined');
        return null;
    }

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

// ===== Delete =====
const deleteUser = async (id: number): Promise<void> => {
    // TODO: We do not want to delete users, just deactivate them (soft delete)
};
