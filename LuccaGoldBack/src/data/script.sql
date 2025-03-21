SELECT id FROM roles WHERE nombre = 'Cliente';
INSERT INTO roles (id, nombre) VALUES (UUID(), 'Admin');
INSERT INTO roles (id, nombre) VALUES (UUID(), 'Cliente');

INSERT INTO usuarios (id, nombre, email, password, rol_id)
VALUES (UUID(),'Yhon Ochoa','yhon@example.com','Yhon8am123*',
        ( SELECT id FROM roles WHERE nombre = 'Cliente' )
    );

INSERT INTO usuarios (id, nombre, email, password, rol_id)
VALUES ( UUID(),'Ana Gómez','ana@example.com','Maria8a123*',
        ( SELECT id FROM roles WHERE nombre = 'Admin'));

INSERT INTO usuarios (id, nombre, email, password, rol_id)
VALUES (UUID(),'Yhon J. Ochoa','yhon@gmail.com','Yhon8a123*',
        ( SELECT id FROM roles WHERE nombre = 'Admin' ));

INSERT INTO perfiles (id, usuario_id, telefono, direccion, ciudad, pais)
VALUES( UUID(),( SELECT id FROM usuarios WHERE email = 'yhon@gmail.com'),
        '3001234537','Calle 123','Bucaramanga','Colombia' );

INSERT INTO perfiles (id, usuario_id, telefono, direccion, ciudad, pais)
VALUES ( UUID(),( SELECT id FROM usuarios WHERE email = 'yhon@example.com'),
        '3001234567','Calle 123','Bogotá','Colombia');

INSERT INTO perfiles (id, usuario_id, telefono, direccion, ciudad, pais)
VALUES (UUID(),(SELECT id FROM usuarios WHERE email = 'ana@example.com'),
        '3129876543','Av. Siempre Viva','Lima','Perú');

INSERT INTO categorias (id, nombre, descripcion)
VALUES (UUID(),'Anillos', 'Anillos de oro y plata');

INSERT INTO categorias (id, nombre, descripcion)
VALUES (UUID(),'Aretes', 'Arete de oro y plata');
    
INSERT INTO categorias (id, nombre, descripcion)
VALUES (UUID(),'Arracada', 'Arracada de oro y plata');
    
INSERT INTO categorias (id, nombre, descripcion)
VALUES (UUID(),'Collares', 'Collares elegantes');

INSERT INTO productos ( id,nombre,descripcion,material,peso,precio,stock,imagen_url, categoria_id)
VALUES
    (
        UUID(),
        'Anillo de Oro 18k',
        'Anillo elegante de oro 18 quilates',
        'Oro 18k',
        5.2,
        1500.00,
        10,
        'https://example.com/anillo1.jpg',
        (
            SELECT
                id
            FROM
                categorias
            WHERE
                nombre = 'Anillos'
        )
    );

    INSERT INTO productos ( id,nombre,descripcion,material,peso,precio,stock,imagen_url,categoria_id)
VALUES
    (
        UUID(),
        'Aretes de Oro 18k',
        'Aretes elegante de oro 18 quilates',
        'Oro 18k',
        2.2,
        3500.00,
        10,
        'https://example.com/Aretes1.jpg',
        (
            SELECT
                id
            FROM
                categorias
            WHERE
                nombre = 'Aretes'
        )
    );


    INSERT INTO productos ( id,nombre,descripcion,material,peso,precio,stock,imagen_url,categoria_id)
VALUES
    (
        UUID(),
        'Arracada de Oro 18k',
        'Arracada elegante de oro 18 quilates',
        'Oro 18k',
        15.2,
        2300.00,
        10,
        'https://example.com/Arracada1.jpg',
        (
            SELECT id FROM categorias WHERE nombre = 'Arracada'
        )
    );
    
    INSERT INTO productos ( id,nombre,descripcion,material,peso,precio,stock,imagen_url,
        categoria_id)
VALUES
    (
        UUID(),
        'Collar de Plata',
        'Hermoso collar de plata esterlina',
        'Plata 925',
        8.5,
        850.00,
        5,
        'https://example.com/collar1.jpg',
        (
            SELECT id FROM categorias WHERE nombre = 'Collares'
        )
    );

INSERT INTO
    pedidos (id, estado, total)
VALUES
    (
        UUID(),
        'pendiente',
        2350.00
    );

INSERT INTO
    productos_pedido (id, pedido_id, producto_id, cantidad, precio_unitario, subtotal)
VALUES
    (
        UUID(),
        (
            SELECT id FROM pedidos LIMIT 1
        ),
        (
            SELECT id FROM productos WHERE nombre = 'Anillo de Oro 18k' limit 1
        ),
        1,
        ( SELECT precio FROM productos WHERE nombre = 'Anillo de Oro 18k' LIMIT 1),
        ( SELECT precio FROM productos WHERE nombre = 'Anillo de Oro 18k' LIMIT 1)
    );

    INSERT INTO
    productos_pedido (id, pedido_id, producto_id, cantidad, precio_unitario, subtotal)
VALUES
    (
        UUID(),
        (
            SELECT id FROM pedidos LIMIT 1
        ),
        (
            SELECT id FROM productos WHERE nombre = 'Collar de Plata' LIMIT 1
        ),
        1,
        ( SELECT precio FROM productos WHERE nombre = 'Collar de Plata' LIMIT 1),
        ( SELECT precio FROM productos WHERE nombre = 'Collar de Plata' LIMIT 1)
    );

INSERT INTO
    ventas (id, pedido_id, usuario_id, total, metodo_pago)
VALUES
    (
        UUID(),
        (
            SELECT id FROM pedidos LIMIT 1
        ),
        (
            SELECT id FROM usuarios WHERE email = 'yhon@example.com'
        ),
        2350.00,
        'tarjeta'
    );

INSERT INTO
    pedidos (id, estado, total)
VALUES
    (UUID(),'pendiente', 2350.00);

INSERT INTO
    pedido_por_usuario (id, usuario_id,  pedido_id)
VALUES
    (
        UUID(),
        (
            SELECT id FROM usuarios WHERE email = 'yhon@example.com'
		),
        (
            SELECT id FROM pedidos LIMIT 1
        )
    )