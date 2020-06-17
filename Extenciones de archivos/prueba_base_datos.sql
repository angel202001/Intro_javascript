CREATE DATABASE infotep;

USE infotep;

CREATE TABLE participantes(
    id INT,
    nombre VARCHAR(25),
    apellido VARCHAR(25),
    cedula VARCHAR(13),
    genero CHAR(1),-- M (masculino) o F (femenino)
    edad SMALLINT 
);

