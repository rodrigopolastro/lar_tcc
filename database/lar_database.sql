-- Lar Database

DROP DATABASE lar;
CREATE DATABASE lar;
USE lar;

CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY,
    email VARCHAR(120),
    user_password VARCHAR(30),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    fk_house_id INTEGER
);

CREATE TABLE Houses (
    house_id INTEGER PRIMARY KEY
);

CREATE TABLE Floors (
    floor_id INTEGER PRIMARY KEY,
    fk_house_id INTEGER
);

CREATE TABLE Rooms (
    room_id INTEGER PRIMARY KEY,
    fk_floor_id INTEGER
);

CREATE TABLE Furniture (
    furniture_id INTEGER PRIMARY KEY,
    fk_room_id INTEGER
);

CREATE TABLE Tasks (
    task_id INTEGER PRIMARY KEY,
    task_name VARCHAR(120),
    task_description VARCHAR(300),
    due_date TIMESTAMP,
    fk_house_id INTEGER,
    fk_room_id INTEGER,
    fk_furniture_id INTEGER
);

CREATE TABLE Belongings (
    belonging_id INTEGER PRIMARY KEY,
    fk_room_id INTEGER,
    fk_furniture_id INTEGER
);

-- Creating relationships between the tables through foreign keys
 
ALTER TABLE Users ADD CONSTRAINT FK_Users_2
    FOREIGN KEY (fk_house_id)
    REFERENCES Houses (house_id)
    ON DELETE RESTRICT;
 
ALTER TABLE Floors ADD CONSTRAINT FK_Floors_2
    FOREIGN KEY (fk_house_id)
    REFERENCES Houses (house_id)
    ON DELETE RESTRICT;
 
ALTER TABLE Rooms ADD CONSTRAINT FK_Rooms_2
    FOREIGN KEY (fk_floor_id)
    REFERENCES Floors (floor_id)
    ON DELETE RESTRICT;
 
ALTER TABLE Furniture ADD CONSTRAINT FK_Furniture_2
    FOREIGN KEY (fk_room_id)
    REFERENCES Rooms (room_id)
    ON DELETE CASCADE;
 
ALTER TABLE Tasks ADD CONSTRAINT FK_Tasks_2
    FOREIGN KEY (fk_room_id)
    REFERENCES Rooms (room_id)
    ON DELETE SET NULL;
 
ALTER TABLE Tasks ADD CONSTRAINT FK_Tasks_3
    FOREIGN KEY (fk_house_id)
    REFERENCES Houses (house_id)
    ON DELETE CASCADE;
 
ALTER TABLE Tasks ADD CONSTRAINT FK_Tasks_4
    FOREIGN KEY (fk_furniture_id)
    REFERENCES Furniture (furniture_id)
    ON DELETE SET NULL;
 
ALTER TABLE Belongings ADD CONSTRAINT FK_Belongings_2
    FOREIGN KEY (fk_room_id)
    REFERENCES Rooms (room_id)
    ON DELETE CASCADE;
 
ALTER TABLE Belongings ADD CONSTRAINT FK_Belongings_3
    FOREIGN KEY (fk_furniture_id)
    REFERENCES Furniture (furniture_id)
    ON DELETE SET NULL;

-- ==================================================================

-- Adding 'name' columns on floors, rooms and furniture tables
ALTER TABLE floors ADD floor_number INTEGER;
ALTER TABLE rooms ADD room_name VARCHAR(30);
ALTER TABLE furniture ADD furniture_name VARCHAR(30);

-- Adding 'AUTO_INCREMENT' to primary-key fields 
-- (Disabling foreign-key checks in order to alter primary keys)
SET FOREIGN_KEY_CHECKS=0; 

ALTER TABLE users      CHANGE COLUMN user_id user_id           INTEGER AUTO_INCREMENT;
ALTER TABLE houses     CHANGE COLUMN house_id house_id         INTEGER AUTO_INCREMENT;
ALTER TABLE floors     CHANGE COLUMN floor_id floor_id         INTEGER AUTO_INCREMENT;
ALTER TABLE rooms      CHANGE COLUMN room_id room_id           INTEGER AUTO_INCREMENT;
ALTER TABLE furniture  CHANGE COLUMN furniture_id furniture_id INTEGER AUTO_INCREMENT;
ALTER TABLE tasks      CHANGE COLUMN task_id task_id           INTEGER AUTO_INCREMENT;
ALTER TABLE belongings CHANGE COLUMN belonging_id belonging_id INTEGER AUTO_INCREMENT;

SET FOREIGN_KEY_CHECKS=1;

-- Sample Values 
INSERT INTO houses (house_id) VALUES (1);
INSERT INTO floors (floor_id, floor_number, fk_house_id) VALUES (1, 1, 1);
INSERT INTO rooms (room_id, room_name, fk_floor_id) VALUES (1, 'Cozinha', 1), (2, 'Sala de Estar', 1);
INSERT INTO furniture (furniture_id, furniture_name, fk_room_id) VALUES (1, 'Geladeira', 1), (2, 'Mesa de Jantar', 2);

-- Allow NULL for tasks.due_date
ALTER TABLE tasks CHANGE COLUMN due_date due_date TIMESTAMP NULL; 