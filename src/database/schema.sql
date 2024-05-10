CREATE DATABASE mycontacts;

CREATE TABLE IF NOT EXISTS contacts (
	id INT NOT NULL UNIQUE AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(255),
  PRIMARY KEY (id)
);