package com.stockflow.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter @Getter
public class ProductDTO {

    private Long id;

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    private String description;

    @NotNull(message = "Le prix est obligatoire")
    private Double prix;

    private int quantiteStock;

    @NotBlank(message = "La catégorie est obligatoire")
    private String categorie;

    private LocalDateTime dateCreation;

}
