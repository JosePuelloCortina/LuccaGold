import { AppDataSource } from "../db";
import fs from "fs";
import path from "path";


export const initialize = async () => {
    const queryRunner = AppDataSource.createQueryRunner();

    const sqlFilePath = path.join(__dirname, 'script.sql');
    const sqlQuery = fs.readFileSync(sqlFilePath, 'utf8').replace(/[\r\n\t]+/g, ' ').trim().split(";");

    try {
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const validate = await queryRunner.query(sqlQuery[0]);
        if( !validate[0] ) sqlQuery.forEach(async element => {
            try {
                await queryRunner.query(element);
            } catch (e) {
                console.log(e);
            }
        });
        await queryRunner.commitTransaction();
        console.log("SQL ejecutado con éxito");
    } catch (error) {
        await queryRunner.rollbackTransaction();
        console.error("Error ejecutando SQL:", error);
    } finally {
        await queryRunner.release();
    }
};