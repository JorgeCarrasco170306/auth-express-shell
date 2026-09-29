import type { Request, Response } from "express";

export class AuthController {

    constructor() {
        /**
         * DI
         */
    }

    register = (req: Request, res: Response) => {
        res.json('register user');
    }
    login = (req: Request, res: Response) => {
        res.json('login user');
    }
    validateEmail = (req: Request, res: Response) => {
        res.json('validate email');
    }
}