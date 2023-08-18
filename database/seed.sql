USE lar;

-- Create initial values for database
INSERT INTO Houses(house_id) VALUES (1);

INSERT INTO Users(fk_house_id, user_email, user_password, first_name, last_name) 
VALUES (1, 'rodrigosilva@gmail.com', '12345', 'Rodrigo', 'Silva');

INSERT INTO Rooms(fk_house_id, room_name) VALUES 
    (1, 'Cozinha'),
    (1, 'Quarto'),
    (1, 'Sala de Estar'),
    (1, 'Sala de Jantar'),
    (1, 'Banheiro');

INSERT INTO Furniture(fk_room_id, furniture_name) VALUES
    (1, 'Geladeira'),
    (1, 'Fogão'),
    (2, 'Cama'),
    (2, 'Escrivaninha'),
    (3, 'Sofá'),
    (3, 'Estante'),
    (4, 'Mesa'),
    (4, 'Cadeira'),
    (5, 'Pia'),
    (5, 'Privada');