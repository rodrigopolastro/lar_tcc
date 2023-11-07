USE lar;

-- Create initial values for database
INSERT INTO Houses(diagram_positions) VALUES ('{ 
    "tiles":{}, 
    "walls":{
        "startingPositions": {},
        "allPositions": {}
    }, 
    "furniture":{
        "startingPositions": {},
        "allPositions": {}
    }, 
    "topWalls":{} 
}');

INSERT INTO Users(fk_house_id, user_email, user_password, first_name, last_name) 
VALUES (1, 'rodrigosilva@gmail.com', '12345', 'Rodrigo', 'Silva');

INSERT INTO Rooms(fk_house_id, room_name, fk_tile_id, fk_wall_id) VALUES 
    (1, 'Cozinha', 1, 1),
    (1, 'Quarto', 2, 2),
    (1, 'Sala de Estar', 3, 3),
    (1, 'Sala de Jantar', 4, 4),
    (1, 'Banheiro', 5, 5);