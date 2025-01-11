
export interface UserEntity {
    id: number;

    username: string;
    name: string;
    lastName: string;
    email: string;
    password: string;

    joinDate: Date;
    lastLogin: Date;
    lastActivity: Date;

    // Optional fields
    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    birthDate?: Date;

    // Optional fields
    profilePicture?: Array<number>;
    coverPicture?: Array<number>;
    bio?: string;
}