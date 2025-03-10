import { Request, Response, NextFunction } from "express";
import { validateEmail, validatePassword } from "./validatorController/validator";
import { AppDataSource } from "../db"

import jwt from 'jsonwebtoken';
import { Usuario } from "../entities/Usuario";
import bcrypt from "bcrypt";


export const loginHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { email, password } = req.body;
        console.log(`email : ${email}, passwordl: ${password}`);
        if (!validateEmail(email)) {
            res.status(400).json({ message: "Email is not valid" });
            return;
        }
        if (!validatePassword(password)) {
            res.status(400).json({ message: "Password is not valid" });
            return;
        }
        const user = await AppDataSource.getRepository(Usuario)
            .createQueryBuilder('Usuario')
            .addSelect('Usuario.password')
            .where("Usuario.email = :email",{ email: email })
            .getOneOrFail();

        console.log(user);

        if (!user || !user.password) {
            res.status(400).json({ message: "user not found" });
            return;
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) { res.status(400).json({ message: "password not valid" }); }

        const token = jwt.sign({ user }, 'secret', { expiresIn: 60 * 60 * 24 });
        
        res.json({ token, error: null, data: 'exito bienvenido', user });
        return
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
};
