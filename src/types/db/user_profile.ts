export interface UserProfileEntity {
    id: number;
    user_id: number;

    profile_picture?: Array<number>;
    cover_picture?: Array<number>;
    bio?: string;
}
