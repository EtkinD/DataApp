/**
 * Schema: userdata
 *
 * Type: enum
 *
 * name: user_roles
 */
export type UserRole = 'admin' | 'user';

/**
 * Schema: userdata
 *
 * Type: enum
 *
 * name: user_status
 */
export type UserStatus = 'active' | 'inactive';

/**
 * Schema: userdata
 *
 * Type: table
 *
 * name: users
 */
export interface UserEntity {
    id: number;

    username: string;
    email: string;

    name: string;
    last_name: string;
    password: string;

    role: UserRole;
    status: UserStatus;

    joined_at: Date;
    last_login_at: Date;
    last_activity_at: Date;

    personal_id?: number;
    profile_id?: number;
}

/**
 * Schema: userdata
 *
 * Type: table
 *
 * name: userprofiles
 */
export interface UserProfileEntity {
    id: number;
    user_id: number;

    profile_picture?: Buffer;
    bio?: string;
    website?: string;

    location?: string;

    last_updated_at: Date;
}

/**
 * Schema: userdata
 *
 * Type: table
 *
 * name: userpersonals
 */
export interface UserPersonalEntity {
    id: number;
    user_id: number;

    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    postal_code?: string;
    birth_date?: Date;

    last_updated_at: Date;
}
