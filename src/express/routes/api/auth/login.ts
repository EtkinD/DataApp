import { Request, Response } from 'express';
import { dbActions } from '../../../../database';
import { LoginRequest } from '../../../../types/request/auth';
import { AuthResponseFactory } from '../../../../types/response/auth';
import { compare } from '../../../../util/hashing';
import { generateToken } from '../../../../util/jwt';

async function login(req: Request, res: Response): Promise<void> {
    const reqbody = req.body as LoginRequest;

    if (!reqbody.username || !reqbody.password) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('Missing username or password');

        res.status(400).send(r);
        return;
    }

    const user = await dbActions.userActions.user.getUserByUsername(
        reqbody.username,
    );

    if (!user) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('User not found');

        res.status(400).send(r);
        return;
    }

    if (!compare(reqbody.password, user.password)) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('Incorrect username or password');

        res.status(400).send(r);
        return;
    }

    // Update user info
    user.last_login = new Date();
    user.last_activity = new Date();

    dbActions.userActions.user.updateUser(user.id, user);

    res.status(200).send(
        AuthResponseFactory()
            .setStatus(200)
            .setSuccess(true)
            .setMessage('Login successful')
            .setToken(generateToken(user as object)),
    );
}

export default login;
