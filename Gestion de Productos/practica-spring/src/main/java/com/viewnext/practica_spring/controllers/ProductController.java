package com.viewnext.practica_spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.viewnext.practica_spring.entity.Product;
import com.viewnext.practica_spring.repository.ProductRepository;

import jakarta.validation.Valid;

// Controlador REST para la entidad Product
// Este controlador maneja las peticiones HTTP relacionadas con los productos
@RestController
@CrossOrigin(origins = {"http://frontend:80","http://localhost:4200"})
public class ProductController {
	
	// Inyección de dependencias del repositorio ProductRepository
	@Autowired
	private ProductRepository productRepo;
	
	// Metodo para redirigir a la documentación de Swagger
	// Este método se invoca cuando se accede a la raíz de la aplicación
	@GetMapping("/")
    public RedirectView redirect(){
        return new RedirectView("/swagger-ui/index.html#/");
    }
	
	// Metodo para obtener todos los productos mediante una petición GET
	// Devuelve una lista de productos en formato JSON
	@GetMapping("/products")
	public List<Product> getProducts(){
		// Se obtiene la lista de productos desde el repositorio y la devuelve
		return productRepo.findAll();
	}
	
	// Metodo para obtener un producto específico mediante su ID
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable long id) {
	
		// Se busca el producto por su ID en el repositorio
		Product product = productRepo.findById(id).get();
		
		// Si el producto existe, se devuelve en la respuesta
		// Si no existe, se devuelve un error 404
		if (product != null) {
	        return ResponseEntity.ok(product);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	// Metodo para guardar un nuevo producto mediante una petición POST
	// Se recibe un objeto Product en el cuerpo de la petición y se guarda en la base de datos
	@PostMapping("/products/save")
	public ResponseEntity<Product> saveProducts(@Valid @RequestBody Product product){
		// Se guarda el producto en el repositorio y se devuelve en la respuesta 200 OK
		return ResponseEntity.ok(productRepo.save(product));
	}
	
	// Metodo para actualizar un producto existente mediante una petición PUT y un ID
	// Se recibe un objeto Product en el cuerpo de la petición y se actualiza en la base de datos
	@PutMapping("/products/update/{id}")
	public ResponseEntity<Product> updateUser(@PathVariable long id,@RequestBody Product product) {
		// Se busca el producto por su ID en el repositorio
		// Si el producto existe y se actualizan sus atributos
		Product updatedProduct = productRepo.findById(id).get();
		updatedProduct.setName(product.getName());
		updatedProduct.setDescription(product.getDescription());
		updatedProduct.setPrice(product.getPrice());
		updatedProduct.setStock(product.getStock());
		// Se guarda el producto actualizado en el repositorio y se devuelve en la respuesta 200 OK
		return ResponseEntity.ok(productRepo.save(updatedProduct));
	}
	
	// Metodo para eliminar un producto existente mediante una petición DELETE y un ID
	@DeleteMapping("/products/delete/{id}")
	public ResponseEntity<Product> deleteUser(@PathVariable long id) {
		// Se busca el producto por su ID en el repositorio
		// Si el producto existe, se elimina del repositorio
		Product deleteProduct = productRepo.findById(id).get();
		productRepo.delete(deleteProduct);
		return null;
	}
	
}
