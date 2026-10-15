StockFlow

Application web de gestion de stock : ajout, modification, suppression et consultation des produits, avec un tableau de bord, la liste des produits en faible stock et le calcul de la valeur totale du stock.

Technologies
Backend : Java 21, Spring Boot, Spring Data JPA, MapStruct, Lombok, Flyway
Base de données : MySQL 8
Frontend : React (Vite), React Router, Axios
Déploiement : Docker, Docker Compose, Nginx
Structure du projet
Stockflow/
├── docker-compose.yml
├── backend/        API REST Spring Boot
└── frontend/       Application React
Lancer avec Docker

Prérequis : Docker Desktop.

bash
docker compose up --build
Application : http://localhost:5173
API : http://localhost:8080/api/products

Arrêter l'application :

bash
docker compose down
Lancer sans Docker

Prérequis : Java 21, Node.js 22, MySQL.

1. Base de données

sql
CREATE DATABASE stockflow;

Les tables et les données de démonstration sont créées automatiquement par Flyway au démarrage du backend.

2. Backend

bash
cd backend
./mvnw spring-boot:run

Sous Windows : .\mvnw.cmd spring-boot:run

Pour changer l'accès à la base, définir les variables d'environnement SPRING_DATASOURCE_URL, SPRING_DATASOURCE_USERNAME et SPRING_DATASOURCE_PASSWORD.

3. Frontend

bash
cd frontend
npm install
npm run dev

Application sur http://localhost:5173

API REST
Méthode	URL	Description
GET	/api/products	Liste des produits
GET	/api/products/{id}	Détails d'un produit
POST	/api/products	Créer un produit
PUT	/api/products/{id}	Modifier un produit
DELETE	/api/products/{id}	Supprimer un produit
GET	/api/products/stock-faible?seuil=5	Produits dont le stock est inférieur ou égal au seuil
GET	/api/products/valeur-stock	Valeur totale du stock (somme de prix × quantité)
Auteur

Hatim Acharaoui
