package com.ejemplo.api.controller;

import com.ejemplo.api.model.*;
import com.ejemplo.api.service.RecetaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Tag(name = "Recetas", description = "CRUD y consultas de recetas de cocina")
@RestController
@RequestMapping("/recetas")
@Validated
@RequiredArgsConstructor
public class RecetaController {
    private final RecetaService service;

    @Operation(summary = "Listar todas las recetas")
    @GetMapping
    public List<Receta> listar() {
        return service.listar();
    }

    @Operation(summary = "Obtener receta por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Receta> obtener(@PathVariable Long id) {
        return service.obtener(id)
                      .map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Buscar recetas por nombre")
    @GetMapping("/buscar")
    public List<Receta> buscar(@RequestParam String nombre) {
        return service.porNombre(nombre);
    }

    @Operation(summary = "Filtrar por categoría")
    @GetMapping("/categoria/{categoria}")
    public List<Receta> porCategoria(@PathVariable Categoria categoria) {
        return service.porCategoria(categoria);
    }

    @Operation(summary = "Filtrar por dieta")
    @GetMapping("/dieta/{dieta}")
    public List<Receta> porDieta(@PathVariable Dieta dieta) {
        return service.porDieta(dieta);
    }

    @Operation(summary = "Recetas rápidas")
    @GetMapping("/rapidas")
    public List<Receta> rapidas(@RequestParam int maxMinutos) {
        return service.rapidas(maxMinutos);
    }

    @Operation(summary = "Filtrar por calorías máximas")
    @GetMapping("/calorias")
    public List<Receta> porCalorias(@RequestParam int maxCal) {
        return service.porCalorias(maxCal);
    }

    @Operation(summary = "Recetas saludables")
    @GetMapping("/saludables")
    public List<Receta> saludables() {
        return service.saludables();
    }

    @Operation(summary = "Crear nueva receta")
    @PostMapping
    public ResponseEntity<Receta> crear(@Valid @RequestBody Receta receta) {
        Receta creado = service.crear(receta);
        return ResponseEntity.status(201).body(creado);
    }

    @Operation(summary = "Actualizar receta existente")
    @PutMapping("/{id}")
    public ResponseEntity<Receta> actualizar(@PathVariable Long id,
                                              @Valid @RequestBody Receta datos) {
        try {
            return ResponseEntity.ok(service.actualizar(id, datos));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Eliminar receta por ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}