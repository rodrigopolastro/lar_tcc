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
  ('tile01.png'),
  ('tile02.png'),
  ('tile03.png'),
  ('tile04.png'),
  ('tile05.png'),
  ('tile06.png');
  ('tile07.png'),
  ('tile08.png'),
  ('tile09.png'),
  ('tile10.png'),
  ('tile11.png'),
  ('tile12.png'),
  ('tile13.png'),
  ('tile14.png'),
  ('tile15.png');

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
