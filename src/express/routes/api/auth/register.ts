import { Request, Response } from "express";

function register(req: Request, res: Response): void {
    res.send('GET ~ /api/auth/register route works');
}

export default register;