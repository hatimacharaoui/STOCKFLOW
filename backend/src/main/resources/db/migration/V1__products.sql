CREATE TABLE products (
    id BIGINT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    prix DOUBLE NOT NULL,
    quantite_stock INT NOT NULL,
    categorie VARCHAR(255) NOT NULL,
    date_creation DATETIME NOT NULL,

    PRIMARY KEY (id)
);