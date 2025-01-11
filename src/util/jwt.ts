import jwt from 'jsonwebtoken';

// TODO: Change this secret key
const secretKey = 'our-very-secret-key-for-data-app';
const algorithm = 'HS256';

function generateToken(
    payload: object,
    expiresIn: '30 days' | '7 days' | '1 days' | number = '30 days',
): string {
    return jwt.sign(payload, secretKey, { expiresIn, algorithm });
}

function verifyToken(token: string): jwt.JwtPayload | string | null {
    try {
        const decoded = jwt.verify(token, secretKey, {
            algorithms: [algorithm],
        });
        return decoded;
    } catch (error) {
        return null;
    }
}

export default { generateToken, verifyToken };
export { generateToken, verifyToken };
