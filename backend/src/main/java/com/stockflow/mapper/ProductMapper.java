package com.stockflow.mapper;

import com.stockflow.dto.ProductDTO;
import com.stockflow.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toEntite(ProductDTO dto);
    ProductDTO toDto(Product product);
    void update(ProductDTO dto, @MappingTarget Product product);
}
