export interface UserProfileEntity {
    id: number;
    userId: number;

    profilePicture?: Array<number>;
    coverPicture?: Array<number>;
    bio?: string;
}
