import {useEffect, useState} from "react";
import productApi from "../services/productApi.js";


export default function Dashboard() {

    const [produits, setProduits] = useState([]);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        chargerProduits();

    }, []);

    const chargerProduits = async () => {
        try {
            const produits = await productApi.getAll();
            setProduits(produits.data);
            setErreur("");

        } catch (error) {
            setErreur("Impossible de charger les produits");
        }
    }


    const nombreProduits = produits.length;
    const stockTotal = produits.reduce(
        (total, produit) => total + produit.quantiteStock, 0);

    const produitsStockFaible = produits.filter(
        produit => produit.quantiteStock <= 5 ).length;


    return (
        <div className="page">
            <h1>Dashboard</h1>

            {erreur && ( <p> {erreur} </p> )}

            <div className="dashboard">

                <div className="card">
                     <h2>{nombreProduits}</h2>
                     <p>Produits</p>
                </div>

                <div className="card">
                    <h2>{stockTotal}</h2>
                    <p>Stock Total</p>
                </div>

                <div className="card">
                    <h2>{produitsStockFaible}</h2>
                    <p>Stock faible</p>
                </div>
            </div>












            {/*
            <div className="container">
                <h1>Produits en faible stock</h1>

                {produits.length === 0 && <p>Aucun produit en faible stock</p>}

                {produits.length > 0 && (
                    <table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Catégorie</th>
                            <th>Prix</th>
                            <th>Stock</th>
                        </tr>
                        </thead>
                        <tbody>
                        {produitStockFaible.map(produit => (
                            <tr key={produit.id}>
                                <td>{produit.nom}</td>
                                <td>{produit.categorie}</td>
                                <td>{produit.prix} DH</td>
                                <td  className="stock-faible">{produit.quantiteStock}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
            */}
        </div>
    )
}