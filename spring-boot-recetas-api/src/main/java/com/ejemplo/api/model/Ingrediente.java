package com.ejemplo.api.model;

import lombok.*;
import javax.persistence.Embeddable;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Ingrediente {
    @NotBlank
    @Size(max = 100)
    private String nombre;

    @Min(0)
    private int calorias;
}