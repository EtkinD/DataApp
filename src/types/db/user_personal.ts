export interface UserPersonalEntity {
    id: number;
    userId: number;

    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    postal_code?: string;
    birth_date?: Date;
}
