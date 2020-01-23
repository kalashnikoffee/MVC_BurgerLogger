-- -- drop, create and use database burgers_db
-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- -- create table burgers
-- CREATE TABLE burgers (
-- id INTEGER NOT NULL AUTO_INCREMENT,
-- burger_name VARCHAR(50),
-- devoured BOOLEAN,
-- PRIMARY KEY (id)
-- );
/* Dropping database */
DROP DATABASE IF EXISTS burgers_db;

/* Creating database */
CREATE DATABASE burgers_db;

USE burgers_db;

/* Creating table */
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured BOOLEAN
);