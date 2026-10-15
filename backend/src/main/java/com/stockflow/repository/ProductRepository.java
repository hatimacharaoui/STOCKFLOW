package com.stockflow.repository;

import com.stockflow.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByPrixEquals(Double prixIsGreaterThan);

    @Query("SELECT p from Product p where p.categorie = :categorie")
    List<Product> findcategorie(@Param("categorie") String categorie);


    @Query(value = "select * from products where quantite_stock <= :seuil", nativeQuery = true)
    List<Product> findStockFaible(int seuil);

}
