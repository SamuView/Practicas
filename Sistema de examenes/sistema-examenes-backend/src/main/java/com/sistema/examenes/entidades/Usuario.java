package main.java.com.sistema.examenes.entidades;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.processing.Generated;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private boolean enabled = true;
    private String perfil; 

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<UsuarioRol> usuarioRoles = new HashSet<>(); // Relación de muchos a muchos con la entidad Rol

}
