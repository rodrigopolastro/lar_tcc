USE lar;

-- (001) Add 'tile_path' field to 'Rooms' table
ALTER TABLE rooms 
  ADD tile_path VARCHAR(255);

-- (002) Rename 'tile_path' field to 'tile_name'
ALTER TABLE rooms 
  CHANGE COLUMN tile_path 
                tile_name  
                VARCHAR(255);

-- (003) Create table 'Tiles' and add tile options to database 
CREATE TABLE Tiles (
  tile_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  tile_name VARCHAR(255)
);

INSERT INTO Tiles (tile_name) VALUES
  ('placeholderTile.png'),
  ('tile1.png'),
  ('tile2.png'),
  ('tile3.png'),
  ('tile4.png'),
  ('tile5.png'),
  ('tile6.png');

-- (004) Change field 'tile_name' for 'tile_id' in 'Rooms' table
ALTER TABLE Rooms 
  DROP COLUMN tile_name;

ALTER TABLE Rooms
  ADD fk_tile_id INTEGER;

ALTER TABLE Rooms
  ADD FOREIGN KEY (fk_tile_id) 
      REFERENCES Tiles (tile_id) 
      ON DELETE RESTRICT;
  -- a tile cannot be deleted if there is a room associated to it

-- (005) Add 'diagram_positions' JSON field in 'Houses' table
ALTER TABLE Houses
  ADD diagram_positions JSON;

-- (006) Create 'Furniture_Images' table and populate it
CREATE TABLE Furniture_Images (
  furniture_image_id INTEGER PRIMARY KEY AUTO_INCREMENT, 
  furniture_image_name VARCHAR(255), 
  furniture_display_name VARCHAR(255),
  default_room_name VARCHAR(255),         -- value used within the system for grouping the furniture. Ex: "kitchen"
  default_room_display_name VARCHAR(255), -- what is displayed for the user. Ex: "Cozinha"
  tiles_width INTEGER,
  tiles_height INTEGER
);

-- Bathroom furniture
INSERT INTO Furniture_Images 
  (default_room_name, default_room_display_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("bathroom", "Banheiro", "banheira01.png", "Banheira", 2, 1);

-- Bedroom furniture
INSERT INTO Furniture_Images 
  (default_room_name, default_room_display_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("bedroom", "Banheiro", "armarioPequeno01Front.png", "Armário Pequeno Marrom", 1, 1),
  ("bedroom", "Banheiro", "armarioPequeno02Front.png", "Armário Pequeno Branco", 1, 1);

-- Dining Room furniture
INSERT INTO Furniture_Images 
  (default_room_name, default_room_display_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("diningRoom","Sala de Jantar","mesa01.png", "Mesa de Madeira Marrom", 2, 2),
  ("diningRoom","Sala de Jantar","mesa02.png", "Mesa de Madeira Branca", 2, 2);

-- Living Room furniture
INSERT INTO Furniture_Images 
  (default_room_name, default_room_display_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("livingRoom", "Sala de Estar", "sofa1Back.png", "Sofá Marrom", 4, 2),
  ("livingRoom", "Sala de Estar", "sofa1Front.png", "Sofá Marrom", 4, 2);

INSERT INTO Furniture_Images 
  (default_room_name, default_room_display_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("kitchen", "Cozinha", "fogão01.png", "Fogão", 2, 2),
  ("kitchen", "Cozinha", "piaCompleta.png", "Pia Completa", 4, 2);

-- Other furniture
INSERT INTO Furniture_Images 
  (default_room_name, default_room_display_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("other", "Outro", "estantePequena01.png", "Estante Pequena", 2, 2);  