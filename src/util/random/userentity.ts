import { randomWord } from '.';
import { UserEntity } from '../../types/db';
import { hash } from '../hashing';

type RandUserEntity = UserEntity & { originalPassword: string };

export function randomUserEntity(): RandUserEntity {
    const data: RandUserEntity = {
        id: Math.floor(Math.random() * 10000),
        name: `${randomWord()}`,
        lastName: `${randomWord()}`,
        originalPassword: `${randomWord(8, 16)}`,
        joinDate: new Date(),
        lastLogin: new Date(),
        lastActivity: new Date(),
        personalId: undefined,
        profileId: undefined,
    } as RandUserEntity;

    data.password = hash(data.originalPassword);

    data.username =
        `${data.name.toLowerCase()}` +
        `.` +
        `${data.lastName.replace(' ', '.').toLowerCase()}`;

    data.email = `${data.name}${data.lastName}@${data.username}.com`;

    return data;
}
