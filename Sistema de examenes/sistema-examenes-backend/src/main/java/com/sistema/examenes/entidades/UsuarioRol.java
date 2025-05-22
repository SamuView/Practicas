package main.java.com.sistema.examenes.entidades;

import javax.annotation.processing.Generated;

@Entity
public class UsuarioRol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long UsuarioRolId;

    @ManyToOne(fetch = FetchType.EAGER)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.EAGER)
    private Rol rol;
}
