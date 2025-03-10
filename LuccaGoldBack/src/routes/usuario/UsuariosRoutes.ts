import { Router } from "express";

import { allUsers, getUser, createUser, updateUser, getUserPedidos } from "../../controllers/UserController";


const router = Router()

router.get("/", allUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.get("/pedidos/:id", getUserPedidos);

export default router;
