import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes.js";
import { AuthController } from "./auth/auth.controller.js";

export class AppRoutes {


    static get routes(): Router {

        const router = Router();

        // ? auth
        router.use('/api/auth', AuthRoutes.routes)

        return router;
    }

}