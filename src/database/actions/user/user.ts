import { dbClient } from '../..';
import { UserEntity } from '../../../types/db/user';

// ========== CRUD ==========
// ===== Create =====
export const createUser = async (
    user: UserEntity,
): Promise<UserEntity | null> => {
    const { username, name, lastName, email, password } = user;
    const query = `
        INSERT INTO users (username, name, lastName, email, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [username, name, lastName, email, password];

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

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

export const getUserByUsername = async (
    username: string,
): Promise<UserEntity | null> => {
    const query = `
        SELECT * FROM users
        WHERE name = $1;
    `;
    const values = [username];

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

export const listUsers = async (): Promise<Array<UserEntity>> => {
    const query = `SELECT * FROM users;`;

    const { rows, rowCount } = await dbClient.query(query);

    if (rowCount === 0) return [];
    return rows as Array<UserEntity>;
};

// ===== Update =====
export const updateUser = async (
    id: number,
    user: UserEntity,
): Promise<UserEntity | null> => {
    const { username, name, lastName, email, password } = user;
    const query = `
        UPDATE users
        SET username = $1, name = $2, lastName = $3, email = $4, password = $5
        WHERE id = $6
        RETURNING *;
    `;
    const values = [username, name, lastName, email, password, id];

    const { rows, rowCount } = await dbClient.query(query, values);

    if (rowCount === 0) return null;
    return rows[0] as UserEntity;
};

// ===== Delete =====
const deleteUser = async (id: number): Promise<void> => {
    // TODO: We do not want to delete users, just deactivate them (soft delete)
};
