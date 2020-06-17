// Queries del modulo 2

// Estructura y base



CREATE TABLE  publicadores(
    autor_id INT(11)  PRIMARY KEY AUTO_INCREMENT,
    id_publicador INT  NOT NULL,
    nombre TEXT,
    ciudad VARCHAR(15),
    estado VARCHAR(2),
    FOREIGN KEY (id_publicador) REFERENCES libros(id)

    

);

INSERT INTO publicadores(id_publicador,nombre, ciudad, estado)
VALUES (1,'New Age Books', 'Boston', 'MA'),
       (2,'Binnet & Hardley', 'Washington', 'DC'),
       (3,'Algodata Infosystems', 'Berkeley', 'CA');




CREATE TABLE  tiendas(
    
    tienda_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT,
    codigo_postal VARCHAR(6),
    ciudad VARCHAR(15),
    estado VARCHAR(2)
    
);

INSERT INTO tiendas(nombre, codigo_postal, ciudad, estado)
VALUES ('Barnums', '92789', 'Tustin', 'CA'),
       ('News & Brews', '96745', 'Los Gatos', 'CA'),
       ('Quality Laundry and Books', '98014', 'Remulade', 'WA'),
       ('Bookbeat', '89076', 'Portland','OR'),
       ('Eric the Read Books', '98056', 'Seatle','WA'),
       ('Fricative Bookshop', '90019','Fremont','CA'),
       ('Thoreau Reading Discount Chain', '1176','Concord','MA');






// Ejercicios 



1- 

2- 

3- SELECT titulo, cantidad_vendida FROM libros WHERE cantidad_vendida < 4000;

4- SELECT titulo, categoria,  precio, cantidad_vendida FROM libros WHERE cantidad_vendida > 1000 AND precio < 10 AND (categoria = 'business' OR categoria = 'mod_cook');

5- SELECT categoria, cantidad_vendida FROM libros WHERE cantidad_vendida BETWEEN '4000' AND '5000';

6- SELECT categoria, precio FROM libros WHERE categoria = 'psychology' AND precio >20;

7- SELECT titulo,precio FROM libros WHERE precio BETWEEN '10' AND '20';

8- SELECT nombre, estado
FROM tiendas
WHERE estado = 'WA';

9-SELECT titulo, categoria
FROM libros
WHERE categoria NOT IN ('mod_cook','UNDECIDED','popular_comp');


10-

11- SELECT titulo, precio FROM libros WHERE precio >10;

12- SELECT titulo, categoria FROM libros WHERE categoria = 'business';

13- SELECT titulo FROM libros WHERE titulo LIKE '%Computer%';

14-SELECT categoria , precio FROM libros WHERE categoria = 'psychology' AND precio < 20;

15- SELECT titulo, categoria, precio FROM libros WHERE categoria = "psychology" AND precio > 20 AND titulo like '%Computer%';


