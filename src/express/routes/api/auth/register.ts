import { Request, Response } from 'express';
import { users } from '.';
import { UserEntity } from '../../../../types/db/user';
import { RegisterRequest } from '../../../../types/request/auth';
import { AuthResponseFactory } from '../../../../types/response/auth';
import { hash } from '../../../../util/hashing';
import { generateToken } from '../../../../util/jwt';

function register(req: Request, res: Response): void {
    const reqbody = req.body as RegisterRequest;

    if (
        !reqbody.email ||
        !reqbody.password ||
        !reqbody.username ||
        !reqbody.name ||
        !reqbody.lastName
    ) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('Missing fields');

        res.status(400).send(r);
        return;
    }

    const user = users.find((user) => user.username === reqbody.username);

    if (user) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('User already exists');

        res.status(400).send(r);
        return;
    }

    // Create new user
    const newUser = reqbody as UserEntity;
    // Set user info
    newUser.id = users.length + 1;
    newUser.password = hash(newUser.password);

    newUser.joinDate = new Date();
    newUser.lastLogin = new Date();
    newUser.lastActivity = new Date();

    // Add user to the list
    users.push(newUser);

    // Send response
    res.status(200).send(
        AuthResponseFactory()
            .setStatus(200)
            .setSuccess(true)
            .setMessage('User registered')
            .setToken(generateToken(newUser as object)),
    );
}

export default register;
