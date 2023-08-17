USE lar;

ALTER TABLE rooms 
CHANGE COLUMN tile_path 
              tile_name  
              VARCHAR(255);