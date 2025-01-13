import jwt from 'jsonwebtoken';
import { getSecretKey } from './environ';

const algorithm = 'HS256';

function generateToken(
    payload: object,
    expiresIn: '30 days' | '7 days' | '1 days' | number = '30 days',
): string {
    return jwt.sign(payload, getSecretKey(), { expiresIn, algorithm });
}

function verifyToken(token: string): jwt.JwtPayload | string | null {
    try {
        const decoded = jwt.verify(token, getSecretKey(), {
            algorithms: [algorithm],
        });
        return decoded;
    } catch (error) {
        return null;
    }
}

export default { generateToken, verifyToken };
export { generateToken, verifyToken };
