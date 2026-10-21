package com.stockflow.service;

import com.stockflow.dto.ProductDTO;
import com.stockflow.entity.Product;

import java.util.List;

public interface ProductService {


    ProductDTO creer(ProductDTO dto);
    List<ProductDTO> afficher();
    ProductDTO rechercheParId(Long id);
    ProductDTO modifier(Long id, ProductDTO dto);
    void supprimer(Long id);
}
