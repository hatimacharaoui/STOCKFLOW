import {useNavigate} from "react-router-dom";
import productApi from "../services/productApi.js";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {productValidation} from "../validations/productValidation.js";


export default function ProductCreate() {

    const navigate = useNavigate();
    const [erreur,setErreur] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(productValidation),
        defaultValues: {
            nom: "", description: "", prix: "", quantiteStock: "", categorie: ""
        }
    });

    const creerProduit = async (data) => {
        try {
            setErreur("");
            const produit = await productApi.create(data);

            navigate(`/products/${produit.data.id}`);
        } catch (error) {
            setErreur("Impossible de créer le produit.");
        }
    }

    return (
        <div className="page">
            <h1>Ajouter un produit</h1>
            {erreur && (<div>{erreur}</div>)}

            <form onSubmit={handleSubmit(creerProduit)}>
                <div className="form-group">
                    <label>Nom du produit</label>

                    <input type="text"{...register("nom")}/>
                    {errors.nom && (
                        <p className="field-error">{errors.nom.message}</p>)}
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea {...register("description")}/>

                    {errors.description && (
                        <p className="field-error">{errors.description.message}</p>)}
                </div>

                <div className="form-group">
                    <label>Prix (DH)</label>

                    <input type="number" {...register("prix", {
                            valueAsNumber: true})}/>
                    {errors.prix && (
                        <p className="field-error">{errors.prix.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Quantité en stock</label>

                    <input type="number"{...register("quantiteStock", {
                            valueAsNumber: true})}/>
                    {errors.quantiteStock && (
                        <p className="field-error">{errors.quantiteStock.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Catégorie</label>

                    <input type="text"{...register("categorie")}/>

                    {errors.categorie && (
                        <p className="field-error">{errors.categorie.message}</p>)}
                </div>

                <button type="submit">Ajouter le produit</button>

                <button type="button"
                    onClick={() => navigate("/products")} >Annuler</button>
            </form>
        </div>
    )
}