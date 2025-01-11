export interface UserPersonalEntity {
    id: number;
    userId: number;

    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    birthDate?: Date;
}
