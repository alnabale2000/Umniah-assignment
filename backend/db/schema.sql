DROP DATABASE IF EXISTS umniah;
CREATE DATABASE umniah;

USE umniah;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255),
    email VARCHAR(255),
    pass VARCHAR(255),
    phoneNumber INT,
    PRIMARY KEY (id)
);

CREATE TABLE user_activity (
    id INT AUTO_INCREMENT NOT NULL,
    userId INT ,
    activity_type VARCHAR(255),
    created_at DATETIME,
    more_details VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id)
);