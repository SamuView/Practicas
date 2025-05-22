package main.java.com.sistema.examenes.entidades;

import java.lang.annotation.Inherited;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Rol {

    @Id
    private Long rolId;
    
    private String nombre;

    @OneToMany(mappedBy = "rol", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<UsuarioRol> usuarioRoles = new HashSet<>(); // Relación de muchos a muchos con la entidad Usuario
}
