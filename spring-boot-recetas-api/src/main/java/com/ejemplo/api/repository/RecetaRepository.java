package com.ejemplo.api.repository;

import com.ejemplo.api.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RecetaRepository extends JpaRepository<Receta, Long> {
    List<Receta> findByNombreContainingIgnoreCase(String nombre);
    List<Receta> findByCategoria(Categoria categoria);
    List<Receta> findByDieta(Dieta dieta);
    List<Receta> findByTiempoPreparacionLessThanEqual(int minutos);
    List<Receta> findByCategoriaAndDieta(Categoria categoria, Dieta dieta);
}