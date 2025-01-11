import { randomWord } from '.';
import { UserEntity } from '../../types/db';
import { hash } from '../hashing';

type RandUserEntity = UserEntity & { originalPassword: string };

export function randomUserEntity(): RandUserEntity {
    const data: RandUserEntity = {
        id: Math.floor(Math.random() * 10000),
        name: `${randomWord()}`,
        last_name: `${randomWord()}`,
        originalPassword: `${randomWord(8, 16)}`,
        join_date: new Date(),
        last_login: new Date(),
        last_activity: new Date(),
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
