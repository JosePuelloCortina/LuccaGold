import { DataSource } from "typeorm";
import { Usuario } from "./entities/Usuario";
import { Role } from "./entities/Rol";
import { Perfil } from "./entities/Perfil";
import { Categoria } from './entities/Categoria';
import { Producto } from './entities/Producto';
import { Pedido } from './entities/Pedido';
import { ProductoPedido } from './entities/ProductoPedido';
import { Venta } from './entities/Venta';
import { PedidoPorUsuario } from "./entities/PedidoPorUsuario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "yhon",
    password: "yhon",
    database: "test-1",
    synchronize: true,
    logging: false,
    entities: [
        Usuario,
        Role,
        Perfil,
        Categoria,
        Producto,
        Pedido,
        ProductoPedido,
        Venta,
        PedidoPorUsuario
    ]
})