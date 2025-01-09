import { Request, Response } from "express";

function login(req: Request, res: Response): void {
    res.send('GET ~ /api/auth/login route works');
}

export default login;