import * as yup from "yup";

export const productValidation = yup.object({
    nom: yup
        .string()
        .required("Le nom est obligatoire"),

    description: yup
        .string(),

    prix: yup
        .number()
        .typeError("Le prix doit être un nombre")
        .required("Le prix est obligatoire")
        .min(0, "Le prix doit être positif"),

    quantiteStock: yup
        .number()
        .typeError("La quantité doit être un nombre")
        .integer("La quantité doit être un entier")
        .min(0, "La quantité ne peut pas être négative")
        .required("La quantité est obligatoire"),

    categorie: yup
        .string()
        .required("La catégorie est obligatoire")
});