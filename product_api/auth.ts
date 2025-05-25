import express, { Request, Response, NextFunction } from 'express';
import { users } from './users.js';


interface AuthRequest extends Request {
    auth?: { username: string; password: string };
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.status(401).json({ error: 'Missing or invalid Authorization header' });
        return;
    }

    try {
        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');

        if (!username || !password) {
            res.status(401).json({ error: 'Invalid credentials format' });
            return;
        }

        const user = users.find(user => user.username === username && user.password === password);

        req.auth = { username, password };

        if (user) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized: Invalid credentials' });
        }
    } catch (error) {
        res.status(401).json({ error: 'Error decoding credentials' });
    }
};

export { authMiddleware } 