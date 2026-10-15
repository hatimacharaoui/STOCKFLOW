import {useEffect, useState} from "react";
import productApi from "../services/productApi.js";
import {Link} from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";


export default function Products() {

    const [produits, setProduits] = useState([]);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        chargerProduits();

    }, []);

    const chargerProduits = async () => {
        try {
            setErreur("");

            const produits = await productApi.getAll();
            setProduits(produits.data);

        } catch (error) {
            setErreur("Impossible de charger les produits")
        }
    }


    const supprimerProduit = async (id) => {
        const confirmation = window.confirm("Voulez-vous supprimer ce produit ?");

        if(!confirmation) {
            return;
        }

        try {
            await productApi.delete(id);
            setProduits(produits.filter(produit => produit.id != id));
        } catch (error) {
            setErreur("Impossible de supprimer le produit.");
        }
    }


    return (
        <div className="page">
            <div className="page-header">
                <h1>Produits</h1>

                <Link to="/">Ajouter un produit</Link>
            </div>

        {erreur && (<div>{erreur}</div>)}
            <div className="products-grid">
                {produits.map(produit => ( <ProductCard key={produit.id} produit={produit} Delete={supprimerProduit}/>
                ))}
            </div>


        </div>
    )
}