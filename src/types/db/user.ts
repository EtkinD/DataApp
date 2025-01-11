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

    // Foreign keys
    personalId?: number;
    profileId?: number;
}
