import { readFileSync } from 'fs';
import path from 'path';

type Env = 'dev' | 'prod' | 'test';

let secretKey: string | undefined;

/**
 * @returns {Env} The current environment (dev, prod, test)
 */
export function getEnv(): Env {
    return process.env.NODE_ENV as Env;
}

/**
 * @returns {boolean} True if the current environment is dev
 */
export function isDev(): boolean {
    return getEnv() === 'dev';
}

/**
 * @returns {boolean} True if the current environment is prod
 */
export function isProd(): boolean {
    return getEnv() === 'prod';
}

/**
 * @returns {boolean} True if the current environment is test
 */
export function isTest(): boolean {
    return getEnv() === 'test';
}

/**
 * @returns {string} The current host (localhost, etc.)
 */
export function getHost(): string {
    return process.env.HOST || 'localhost';
}

/**
 * @returns {number} The current server port
 */
export function getPort(): number {
    return parseInt(process.env.PORT || '3000', 10);
}

/**
 * @returns {string} The current API URL
 */
export function getApiUrl(): string {
    return `http://${getHost()}:${getPort()}`;
}

/**
 * @returns {string} The current Socket URL
 */
export function getSocketUrl(): string {
    return `ws://${getHost()}:${getPort()}`;
}

/**
 * @returns {string} The current database URL
 */
export function getDbUrl(): string | undefined {
    return process.env.DATABASE_URL || process.env.NOODE_DATABASE_URL;
}

/**
 * @returns {string} The current static folder path
 */
export function getStaticFolder(): string {
    // 2 folders up from src/util to get to the root folder
    const folderName = process.env.STATIC_DIR || 'public';
    return path.join(__dirname, '..', '..', folderName);
}

/**
 * Reads the secret key from the file system
 *
 * To set the secret key, set the SECRET_KEY_PATH environment variable
 *
 * @returns {string} The current secret key
 */
export function getSecretKey(): string {
    if (secretKey) return secretKey;

    const path = process.env.SECRET_KEY_PATH;

    if (!path) {
        console.error('Secret key path not found');
        secretKey = 'default';
        return secretKey;
    }

    try {
        const key = readFileSync(path, 'utf8');
        secretKey = key;
    } catch (err) {
        console.error('Error reading secret key', err);
        secretKey = 'default';
    }
    return secretKey;
}

export default {
    getEnv,
    isDev,
    isProd,
    isTest,
    getHost,
    getPort,
    getApiUrl,
    getSocketUrl,
    getDbUrl,
    getStaticFolder,
    getSecretKey,
};
