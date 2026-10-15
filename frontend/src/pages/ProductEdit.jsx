import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {productValidation} from "../validations/productValidation.js";
import productApi from "../services/productApi.js";


export default function ProductEdit() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [erreur, setErreur] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({resolver: yupResolver(productValidation),
    defaultValues: {nom: "", description: "", prix: "", quantiteStock: "", categorie: ""}});

    useEffect(() => {
        chargerProduit();
    },[id, reset]);

    const chargerProduit = async () => {
        try {
            setErreur("");
            const produit = await productApi.getById(id);

            reset({
                nom: produit.data.nom,
                description: produit.data.description,
                prix: produit.data.prix,
                quantiteStock: produit.data.quantiteStock,
                categorie: produit.data.categorie
            });
        } catch (error) {
            setErreur(error.response?.data?.message || "Impossible de charger le produit ")
        }
    }

    const modifierProduit = async (data) => {
        try {
            setErreur("");
            await productApi.update(id, data);
            navigate(`/products/${id}`);

        } catch (error) {
           setErreur(error.response?.data?.message || "Impossible de modifier le produit");
        }
    }

    return (
        <div className="page">
            <h1>Modifier le produit</h1>
            {erreur && (<div className="">{erreur}</div>)}

            <form onSubmit={handleSubmit(modifierProduit)}>
                <div className="form-group">
                    <label>Nom du produit</label>
                    <input type="text" {...register('nom')} />
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
                    <input type="number" {...register("prix", {valueAsNumber: true})} />
                    {errors.prix && (
                        <p className="field-error">{errors.prix.message}</p>)}
                </div>
                <div className="form-group">
                    <label>Quantité en stock</label>
                    <input type="number" {...register("quantiteStock", {valueAsNumber: true})} />
                    {errors.quantiteStock && (
                        <p className="field-error">{errors.quantiteStock.message}</p>)}
                </div>
                <div className="form-group">
                    <label>Catégorie</label>
                    <input type="text" {...register("categorie")}/>
                    {errors.categorie && (<p className="">{errors.categorie.message}</p>)}
                </div>

                <button type="submit">Enregistrer</button>
                <button type="button" onClick={() => navigate(`/products/${id}`)}>Annuler</button>

            </form>
        </div>
    )
}