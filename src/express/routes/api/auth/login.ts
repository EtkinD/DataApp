import { Request, Response } from 'express';
import { users } from '.';
import { LoginRequest } from '../../../../types/request/auth';
import { AuthResponseFactory } from '../../../../types/response/auth';
import { compare } from '../../../../util/hashing';
import { generateToken } from '../../../../util/jwt';

function login(req: Request, res: Response): void {
    const reqbody = req.body as LoginRequest;

    if (!reqbody.username || !reqbody.password) {
        const r = AuthResponseFactory()
            .setStatus(400)
            .setSuccess(false)
            .setMessage('Missing username or password');

        res.status(400).send(r);
        return;
    }

    const user = users.find((user) => user.username === reqbody.username);

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

    // Send response
    const r = AuthResponseFactory()
        .setStatus(200)
        .setSuccess(true)
        .setMessage('Login successful')
        .setToken(generateToken(user as object));
    res.status(200).send(r);
}

export default login;
