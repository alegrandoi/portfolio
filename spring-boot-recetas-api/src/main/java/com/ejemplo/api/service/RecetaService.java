package com.ejemplo.api.service;

import com.ejemplo.api.model.*;
import com.ejemplo.api.repository.RecetaRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecetaService {
    private final RecetaRepository repo;

    public List<Receta> listar() {
        return repo.findAll();
    }

    public Optional<Receta> obtener(Long id) {
        return repo.findById(id);
    }

    public Receta crear(Receta receta) {
        return repo.save(receta);
    }

    public Receta actualizar(Long id, Receta datos) {
        return repo.findById(id)
                   .map(r -> {
                       r.setNombre(datos.getNombre());
                       r.setDescripcion(datos.getDescripcion());
                       r.setIngredientes(datos.getIngredientes());
                       r.setTiempoPreparacion(datos.getTiempoPreparacion());
                       r.setCategoria(datos.getCategoria());
                       r.setDieta(datos.getDieta());
                       return repo.save(r);
                   })
                   .orElseThrow(() -> new RuntimeException("Receta no encontrada"));
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }

    public List<Receta> porNombre(String kw) {
        return repo.findByNombreContainingIgnoreCase(kw);
    }

    public List<Receta> porCategoria(Categoria categoria) {
        return repo.findByCategoria(categoria);
    }

    public List<Receta> porDieta(Dieta dieta) {
        return repo.findByDieta(dieta);
    }

    public List<Receta> rapidas(int maxMinutos) {
        return repo.findByTiempoPreparacionLessThanEqual(maxMinutos);
    }

    public List<Receta> saludables() {
        return repo.findByCategoria(Categoria.SALUDABLE)
                   .stream()
                   .filter(r -> r.getDieta() != null)
                   .collect(Collectors.toList());
    }

    public List<Receta> porCalorias(int maxCal) {
        return listar().stream()
                       .filter(r -> r.getCaloriasTotales() <= maxCal)
                       .collect(Collectors.toList());
    }
}