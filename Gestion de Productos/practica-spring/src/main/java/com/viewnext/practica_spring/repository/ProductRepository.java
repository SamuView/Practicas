package com.viewnext.practica_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.viewnext.practica_spring.entity.Product;

// Repositorio para la entidad Product
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
