import path from 'path';

type Env = 'dev' | 'prod' | 'test';

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
};
