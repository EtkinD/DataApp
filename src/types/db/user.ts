export interface UserEntity {
    id: number;

    username: string;
    name: string;
    last_name: string;
    email: string;
    password: string;

    join_date: Date;
    last_login: Date;
    last_activity: Date;

    // Foreign keys
    personal_id?: number;
    profile_id?: number;
}
