import { Request, Response } from 'express';
import { dbActions } from '../../../../database';
import { UserEntity } from '../../../../types/db';
import { RegisterRequest } from '../../../../types/request/auth';
import { AuthResponseFactory } from '../../../../types/response/auth';
import { hash } from '../../../../util/hashing';
import { generateToken } from '../../../../util/jwt';

async function register(req: Request, res: Response): Promise<void> {
    const reqbody = req.body as RegisterRequest;

    if (
        !reqbody.email ||
        !reqbody.password ||
        !reqbody.username ||
        !reqbody.name ||
        !reqbody.last_name
    ) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('Missing fields');

        res.status(400).send(r);
        return;
    }

    const user = await dbActions.userActions.user.getUserByEmail(reqbody.email);

    if (user) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('User already exists');

        res.status(400).send(r);
        return;
    }

    // Hash password
    reqbody.password = hash(reqbody.password);
    // Create user in database
    const newUser = await dbActions.userActions.user.createUser(
        reqbody as UserEntity,
    );

    if (!newUser) {
        const r = AuthResponseFactory()
            .setStatus(500)
            .setSuccess(false)
            .setMessage('Error creating user');

        res.status(500).send(r);
        return;
    }

    res.status(200).send(
        AuthResponseFactory()
            .setStatus(200)
            .setSuccess(true)
            .setMessage('User registered')
            .setToken(generateToken(newUser as object)),
    );
}

export default register;
