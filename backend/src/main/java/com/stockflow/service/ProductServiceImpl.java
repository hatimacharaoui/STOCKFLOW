package com.stockflow.service;
import com.stockflow.dto.ProductDTO;
import com.stockflow.entity.Product;
import com.stockflow.exception.ProductNotFoundException;
import com.stockflow.mapper.ProductMapper;
import com.stockflow.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    private final Double PRIX = 100.00;
    private final int SEUIL = 5;

    public List<ProductDTO> findStockFaible() {
        return productRepository.findStockFaible(SEUIL)
                .stream().map(p -> productMapper.toDto(p)).toList();
    }

    @Override
    public List<ProductDTO> findcategorie(String categorie) {
        return productRepository.findcategorie(categorie)
                .stream().map(productMapper::toDto).toList();
    }

    public List<ProductDTO> findProduct() {
        return productRepository.findByPrixEquals(PRIX)
                .stream().map(productMapper::toDto).toList();
    }

    public ProductDTO creer(ProductDTO dto) {

        Product product = productMapper.toEntite(dto);
        product.setDateCreation(LocalDateTime.now());
        return productMapper.toDto(productRepository.save(product));
    }

    public List<ProductDTO> afficher() {
        return productRepository.findAll()
                .stream().map(productMapper::toDto).toList();
    }

    public ProductDTO rechercheParId(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("aucun produit trouvé"));
        return productMapper.toDto(product);
    }

    public ProductDTO modifier(Long id, ProductDTO dto) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("aucun produit trouvé"));
        productMapper.update(dto, product);

        return productMapper.toDto(productRepository.save(product));
    }

    public void supprimer(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("aucun produit trouvé"));
        productRepository.delete(product);
    }
}
