package com.viewnext.practica_spring.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Clase que representa la entidad Product en la base de datos
@Entity
@Table(name = "products")
public class Product {
	
	// Atributos de la entidad Product
	// id: identificador único del producto autogenerativo
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	// name: nombre del producto
	@Column
	private String name;
	
	// description: descripción del producto
	@Column
	private String description;
	
	// price: precio del producto
	@Column
	private Double price;
	
	// stock: cantidad de producto disponible en stock
	@Column
	private int stock;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price + ", stock="
				+ stock + "]";
	}
}
