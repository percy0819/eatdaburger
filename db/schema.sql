
CREATE DATABASE burger_db;
USE burgers_db;

CREATE TABLE burger_db
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean,
	date TIMESTAMP,
	PRIMARY KEY (id)
);