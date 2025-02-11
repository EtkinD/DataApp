import { randomWord } from '.';
import { UserEntity } from '../../types/db';
import { hash } from '../hashing';

type RandUserEntity = UserEntity & { originalPassword: string };

export function randomUserEntity(): RandUserEntity {
    const data: RandUserEntity = {
        id: Math.floor(Math.random() * 10000) + 1,
        name: `${randomWord()}`,
        last_name: `${randomWord()}`,
        originalPassword: `${randomWord(8, 16)}`,
        joined_at: new Date(),
        last_login_at: new Date(),
        last_activity_at: new Date(),
        personal_id: undefined,
        profile_id: undefined,
    } as RandUserEntity;

    data.password = hash(data.originalPassword);

    data.username =
        `${data.name.toLowerCase()}` +
        `.` +
        `${data.last_name.replace(' ', '.').toLowerCase()}`;

    data.email = `${data.name}${data.last_name}@${data.username}.com`;

    return data;
}
