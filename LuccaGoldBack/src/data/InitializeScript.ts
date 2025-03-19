import { AppDataSource } from "../db";
import fs from "fs";
import path from "path";


export const initialize = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    
    console.log("Running seed script...");
    const sqlFilePath = path.join(__dirname, 'script.sql');
    const sqlQuery = fs.readFileSync(sqlFilePath, 'utf8').replace(/[\r\n\t]+/g, ' ').trim();

    try {
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const resp = await queryRunner.query(sqlQuery);
        console.log(resp);
        await queryRunner.commitTransaction();
        const resp2 = await queryRunner.query('select * from usuarios;');
        console.log(resp2);
        console.log("SQL ejecutado con éxito");
    } catch (error) {
        await queryRunner.rollbackTransaction();
        console.error("Error ejecutando SQL:", error);
    } finally {
        await queryRunner.release();
    }
};