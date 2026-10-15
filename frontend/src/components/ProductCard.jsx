import {Link} from "react-router-dom";


export default function ProductCard({produit, Delete}) {

    const stockFaible = produit.quantiteStock <= 5;
    return (
        <div className="product-card">
            <h3>{produit.nom}</h3>
            <p>{produit.description}</p>
            <p>Prix : {produit.prix} DH</p>
            <p>Stock : {produit.quantiteStock}</p>
            <p>Catégorie : {produit.categorie}</p>

            {stockFaible && (<strong>Stock faible</strong>)}

            <div className="card-actions">
                <Link to={`/products/${produit.id}`}>Voir</Link>
                <Link to={`/products/${produit.id}/edit`}>modifier</Link>
                <button onClick={() => Delete(produit.id)}>Supprimer</button>
            </div>
        </div>
    )
}