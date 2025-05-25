import { Request, Response, NextFunction } from 'express';
interface AuthRequest extends Request {
    auth?: {
        username: string;
        password: string;
    };
}
declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => void;
export { authMiddleware };
