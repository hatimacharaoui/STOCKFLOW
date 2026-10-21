package com.stockflow.controller;

import com.stockflow.dto.ProductDTO;
import com.stockflow.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;


    @PostMapping
    public ResponseEntity<ProductDTO> creer(@Valid @RequestBody ProductDTO dto) {
        ProductDTO product = productService.creer(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> afficher() {
        return ResponseEntity.ok(productService.afficher());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> chercherParId(@PathVariable Long id) {
        return ResponseEntity.ok(productService.rechercheParId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> modifier(@PathVariable Long id, @Valid @RequestBody ProductDTO dto) {

        return ResponseEntity.ok(productService.modifier(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimer(@PathVariable Long id) {

        productService.supprimer(id);
        return ResponseEntity.noContent().build();
    }


}
