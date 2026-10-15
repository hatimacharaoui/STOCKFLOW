import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import productApi from "../services/productApi.js";


export default function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        const chargerProduit = async () => {
            try{
                const produit = await productApi.getById(id);
                setProduit(produit.data);

            } catch (error) {
                setProduit(null);
            }
        }
        chargerProduit();
    }, [id]);

    if (!produit) {
        return (
            <div className="page">
                <h1>Produit introuvable</h1>
                <Link to="/products">Retour aux produits</Link>
            </div>
        )}

    return (
        <div className="page">

            <h1>{produit.nom}</h1>

            <div className="product-details">
                <p><strong>Description : </strong>{produit.description}</p>

                <p><strong>Prix :</strong>{" "}{produit.prix} DH</p>

                <p><strong>Stock :</strong>{" "}{produit.quantiteStock}</p>

                <p><strong>Catégorie :</strong>{" "}{produit.categorie}</p>

                <p><strong>Date de création :</strong>{" "}{produit.dateCreation}</p>
            </div>

            <div className="card-actions">
            <Link to="/products">Retour</Link>
            </div>
        </div>
    )
}