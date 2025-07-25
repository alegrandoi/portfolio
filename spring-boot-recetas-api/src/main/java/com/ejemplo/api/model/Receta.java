package com.ejemplo.api.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Receta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    private String nombre;

    @NotBlank
    @Size(max = 500)
    private String descripcion;

    @NotEmpty
    @ElementCollection
    @CollectionTable(name = "receta_ingredientes", joinColumns = @JoinColumn(name = "receta_id"))
    @AttributeOverrides({
        @AttributeOverride(name = "nombre", column = @Column(name = "ingrediente_nombre")),
        @AttributeOverride(name = "calorias", column = @Column(name = "ingrediente_calorias"))
    })
    private List<Ingrediente> ingredientes;

    @Min(1)
    private int tiempoPreparacion; // minutos

    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @Enumerated(EnumType.STRING)
    private Dieta dieta;

    private LocalDateTime fechaCreacion = LocalDateTime.now();

    /** Total de calorías sumando cada ingrediente */
    @Transient
    public int getCaloriasTotales() {
        return ingredientes.stream()
                           .mapToInt(Ingrediente::getCalorias)
                           .sum();
    }
}