/* Modelo Lógico LAR 1: */

/* DROP DATABASE Lar;
CREATE DATABASE Lar;
USE Lar; */

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
    fk_room_id INTEGER,
    fk_house_id INTEGER,
    fk_furniture_id INTEGER
);

CREATE TABLE Belongings (
    belonging_id INTEGER PRIMARY KEY,
    fk_room_id INTEGER,
    fk_furniture_id INTEGER
);
 
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