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
  ('piso1.png'),
  ('piso2.png'),
  ('piso3.png'),
  ('piso4.png'),
  ('piso5.png'),
  ('piso6.png'),
  ('piso7.png'),
  ('piso8.png'),
  ('piso9.png'),
  ('piso10.png'),
  ('piso11.png'),
  ('piso12.png'),
  ('piso13.png'),
  ('piso14.png'),
  ('piso15.png');

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
  default_room_name VARCHAR(255),
  tiles_width INTEGER,
  tiles_height INTEGER
);

-- Bathroom furniture
INSERT INTO Furniture_Images 
  (default_room_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("bathroom", "chuveiroBrancoRight.png", "Chuveiro Branco", 2, 4),
  ("bathroom", "chuveiroBrancoLeft.png", "Chuveiro Branco", 2, 4),
  ("bathroom", "chuveiroBrancoFront.png", "Chuveiro Branco", 2, 4),
  ("bathroom", "piaBanheiroBegeBack.png", "Pia Bege", 2, 3),
  ("bathroom", "piaBanheiroBegeFront.png", "Pia Bege", 2, 3),
  ("bathroom", "piaBanheiroBegeLeft.png", "Pia Bege", 2, 3),
  ("bathroom", "piaBanheiroBegeRight.png", "Pia Bege", 2, 3),
  ("bathroom", "piaBanheiroMarromRight.png", "Pia Marrom", 2, 3),
  ("bathroom", "piaBanheiroMarromLeft.png", "Pia Marrom", 2, 3),
  ("bathroom", "piaBanheiroMarromFront.png", "Pia Marrom", 2, 3),
  ("bathroom", "piaBanheiroMarromBack.png", "Pia Marrom", 2, 3),
  ("bathroom", "piaBanheiroMarromRight.png", "Pia Marrom", 2, 3),
  ("bathroom", "vasoSanitarioBegeRight.png", "Vaso Sanitario Bege", 2, 3),
  ("bathroom", "vasoSanitarioBegeLeft.png", "Vaso Sanitario Bege", 2, 3),
  ("bathroom", "vasoSanitarioBegeFront.png", "Vaso Sanitario Bege", 2, 3),
  ("bathroom", "vasoSanitarioBegeBack.png", "Vaso Sanitario Bege", 2, 3),
  ("bathroom", "banheira01.png", "Banheira", 4, 2);

-- Bedroom furniture
INSERT INTO Furniture_Images 
  (default_room_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("bedroom", "armarioPequenoBrancoFront.png", "Armario Pequeno Branco", 2, 2),
  ("bedroom", "armarioPequenoMarromFront.png", "Armario Pequeno Marrom", 2, 2),
  ("bedroom", "camaCasalCinzaFront.png", "Cama Casal Cinza", 4, 4),
  ("bedroom", "camaCasalMarromRight.png", "Cama Casal Marrom", 3, 3),
  ("bedroom", "camaCasalMarromLeft.png", "Cama Casal Marrom", 3, 3),
  ("bedroom", "camaCasalMarromFront.png", "Cama Casal Marrom", 4, 4),
  ("bedroom", "camaSolteiroBegeFront.png", "Cama Solteiro Bege", 2, 4),
  ("bedroom", "camaSolteiroBegeLeft.png", "Cama Solteiro Bege", 3, 2),
  ("bedroom", "camaSolteiroBegeRight.png", "Cama Solteiro Bege", 3, 2),
  ("bedroom", "camaSolteiroMarromRight.png", "Cama Solteiro Marrom", 3, 2),
  ("bedroom", "camaSolteiroMarromLeft.png", "Cama Solteiro Marrom", 3, 2),
  ("bedroom", "camaSolteiroMarromFront.png", "Cama Solteiro Marrom", 2, 4);

-- Dining Room furniture
INSERT INTO Furniture_Images 
  (default_room_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("diningRoom", "mesaGrandeBegeFrontBack.png", "Mesa Grande Bege", 2, 5),
  ("diningRoom", "mesaGrandeBegeLeftRight.png", "Mesa Grande Bege", 5, 3),
  ("diningRoom", "mesaGrandeBrancaFrontBack.png", "Mesa Grande Branca", 2, 5),
  ("diningRoom", "mesaGrandeBrancaLeftRight.png", "Mesa Grande Branca", 5, 3),
  ("diningRoom", "mesaGrandeMarromFrontBack.png", "Mesa Grande Marrom", 2, 5),
  ("diningRoom", "mesaGrandeMarromLeftRight.png", "Mesa Grande Marrom", 5, 3),
  ("diningRoom", "mesaPequenaBege.png", "Mesa Pequena Bege", 2, 2),
  ("diningRoom", "mesaPequenaBranca.png", "Mesa Pequena Branca", 2, 2),
  ("diningRoom", "mesaPequenaBrancaRedonda.png", "Mesa Pequena Branca Redonda", 2, 2),
  ("diningRoom", "mesaPequenaMarrom.png", "Mesa Pequena Marrom", 2, 2),
  ("diningRoom", "mesaPequenaMarromEscuro.png", "Mesa Pequena Marrom Escuro", 2, 2),
  ("diningRoom", "mesaPequenaVidro.png", "Mesa Pequena de Vidro", 2, 2);

-- Living Room furniture
INSERT INTO Furniture_Images 
  (default_room_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("livingRoom", "sofaBegeBack.png", "Sofá Bege", 3, 2),
  ("livingRoom", "sofaBegeFront.png", "Sofá Bege", 3, 2),
  ("livingRoom", "sofaBegeLeft.png", "Sofá Bege", 2, 3),
  ("livingRoom", "sofaBegeRight.png", "Sofá Bege", 2, 3),
  ("livingRoom", "sofaBrancoBack.png", "Sofá Branco", 3, 2),
  ("livingRoom", "sofaBrancoFront.png", "Sofá Branco", 3, 2),
  ("livingRoom", "sofaBrancoLeft.png", "Sofá Branco", 2, 3),
  ("livingRoom", "sofaBrancoRight.png", "Sofá Branco", 2, 3),
  ("livingRoom", "sofaMarromBack.png", "Sofá Marrom", 3, 2),
  ("livingRoom", "sofaMarromFront.png", "Sofá Marrom", 3, 2),
  ("livingRoom", "sofaMarromRight.png", "Sofá Branco", 2, 3),
  ("livingRoom", "sofaMarromLeft.png", "Sofá Branco", 2, 3),
  ("livingRoom", "tvFront.png", "Televisão", 3, 3),
  ("livingRoom", "estantePequena.png", "Estante Pequena", 2, 2),  
  ("livingRoom", "prateleira.png", "Prateleira", 2, 2);  

-- Kitchen furniture
INSERT INTO Furniture_Images 
  (default_room_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
  ("kitchen", "fogão01.png", "Fogão Marrom", 2, 2),
  ("kitchen", "piaCompleta.png", "Pia Completa", 4, 2)
  ("kitchen", "fogaoFront.png", "Fogão Branco", 2, 2),
  ("kitchen", "piaCozinhaFront.png", "Pia da Cozinha", 2, 2),
  ("kitchen", "geladeiraFront.png", "Geladeira", 3, 2),
  ("kitchen", "balcaoCozinhaFront.png", "Balcão", 2, 3),
  ("kitchen", "ilhaCentro.png", "Ilha de Centro", 2, 4);

-- Other furniture
-- INSERT INTO Furniture_Images 
--   (default_room_name, furniture_image_name, furniture_display_name, tiles_width, tiles_height) VALUES
--   ()

-- (007) Add furniture_image foreign key to furniture table
ALTER TABLE Furniture
  ADD fk_furniture_image_id INTEGER;

ALTER TABLE Furniture
  ADD FOREIGN KEY (fk_furniture_image_id) 
      REFERENCES Furniture_Images (furniture_image_id) 
      ON DELETE RESTRICT; 
  -- a furniture_image cannot be deleted if there is a user's furniture associated to it

-- (008) Add 'diagram_image' field in 'Houses' table to store the image dataURL
ALTER TABLE Houses
  ADD diagram_image LONGTEXT;

-- (009) Create 'Walls' table, populate it and add its id as 
--       a foreign key in rooms table.
CREATE TABLE Walls (
  wall_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  wall_name VARCHAR(255)
);

INSERT INTO Walls (wall_name) VALUES
  ('wall01.png'),
  ('wall02.png'),
  ('wall03.png'),
  ('wall04.png'),
  ('wall05.png'),
  ('wall06.png'),
  ('wall07.png'),
  ('wall08.png'),
  ('wall09.png'),
  ('wall10.png'),
  ('wall11.png'),
  ('wall12.png'),
  ('wall13.png'),
  ('wall14.png'),
  ('wall15.png');

ALTER TABLE Rooms
  ADD fk_wall_id INTEGER;

ALTER TABLE Rooms
  ADD FOREIGN KEY (fk_wall_id) 
      REFERENCES Walls (wall_id) 
      ON DELETE RESTRICT;
  -- a wall cannot be deleted if there is a room associated to it