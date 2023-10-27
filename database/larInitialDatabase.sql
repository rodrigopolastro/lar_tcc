DROP DATABASE IF EXISTS lar;
CREATE DATABASE lar;
USE lar;

CREATE TABLE Houses (
    house_id INTEGER PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    fk_house_id INTEGER,
    user_email VARCHAR(50) UNIQUE,
    user_password VARCHAR(30),
    first_name VARCHAR(30),
    last_name VARCHAR(30),

    FOREIGN KEY (fk_house_id) 
    REFERENCES Houses (house_id) 
    ON DELETE RESTRICT
    -- a house cannot be deleted if there is a user associated to it
);

CREATE TABLE Rooms (
    room_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    fk_house_id INTEGER,
    room_name VARCHAR(30),

    FOREIGN KEY (fk_house_id)
    REFERENCES Houses (house_id)
    ON DELETE CASCADE
    -- if a house is deleted, its rooms are deleted too
);

CREATE TABLE Furniture (
    furniture_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    fk_room_id INTEGER,
    furniture_name VARCHAR(30),

    FOREIGN KEY (fk_room_id)
    REFERENCES Rooms (room_id)
    ON DELETE RESTRICT
    -- a room cannot be deleted if there is furniture associated to it
);

CREATE TABLE Tasks (
    task_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    fk_house_id INTEGER,
    fk_room_id INTEGER,
    fk_furniture_id INTEGER,
    task_name VARCHAR(100),
    task_description VARCHAR(300),
    due_date DATE,
    due_time TIME,
    is_completed BOOLEAN,

    FOREIGN KEY (fk_house_id)
    REFERENCES Houses (house_id)
    ON DELETE CASCADE,
    -- if a house is deleted, its tasks are deleted too

    FOREIGN KEY (fk_room_id)
    REFERENCES Rooms (room_id)
    ON DELETE SET NULL,
    -- if a room is deleted, its tasks remain on the database with no room associated

    FOREIGN KEY (fk_furniture_id)
    REFERENCES Furniture (furniture_id)
    ON DELETE SET NULL
    -- if a piece of furniture is deleted, its tasks remain on the database with no piece of furniture associated
);