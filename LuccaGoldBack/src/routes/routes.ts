import { Router } from "express";

import { loginHandler } from "../controllers/authController";
import { requireAuth } from "../middlewares/requireAuth";
import Usuario  from "../routes/usuario/UsuariosRoutes";

const router = Router()

router.post('/login', loginHandler);

router.use("/users", Usuario);//requireAuth

export default router;
