package com.ejemplo.api;

import com.ejemplo.api.model.Categoria;
import com.ejemplo.api.model.Dieta;
import com.ejemplo.api.model.Ingrediente;
import com.ejemplo.api.model.Receta;
import com.ejemplo.api.repository.RecetaRepository;
import com.ejemplo.api.service.RecetaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RecetaServiceTests {

    @Mock
    private RecetaRepository repo;

    @InjectMocks
    private RecetaService service;

    private Receta receta;

    @BeforeEach
    void setup() {
        receta = new Receta();
        receta.setId(1L);
        receta.setNombre("Test");
        receta.setDescripcion("Desc");
        receta.setIngredientes(Arrays.asList(
            new Ingrediente("Ing1", 50),
            new Ingrediente("Ing2", 30)
        ));
        receta.setTiempoPreparacion(10);
        receta.setCategoria(Categoria.SALUDABLE);
        receta.setDieta(Dieta.NINGUNA);
    }

    @Test
    void testListar() {
        when(repo.findAll()).thenReturn(Arrays.asList(receta));
        List<Receta> lista = service.listar();
        assertThat(lista).hasSize(1).contains(receta);
        verify(repo).findAll();
    }

    @Test
    void testPorNombre() {
        when(repo.findByNombreContainingIgnoreCase("test")).thenReturn(Arrays.asList(receta));
        List<Receta> lista = service.porNombre("test");
        assertThat(lista).contains(receta);
        verify(repo).findByNombreContainingIgnoreCase("test");
    }

    @Test
    void testPorCalorias() {
        when(repo.findAll()).thenReturn(Arrays.asList(receta));
        List<Receta> lista = service.porCalorias(100);
        assertThat(lista).contains(receta);
    }

    @Test
    void testCrear() {
        when(repo.save(any(Receta.class))).thenReturn(receta);
        Receta creado = service.crear(receta);
        assertThat(creado).isEqualTo(receta);
        verify(repo).save(receta);
    }

    @Test
    void testActualizar() {
        Receta datos = new Receta();
        datos.setNombre("Nuevo");
        datos.setDescripcion("Nueva desc");
        datos.setIngredientes(receta.getIngredientes());
        datos.setTiempoPreparacion(20);
        datos.setCategoria(Categoria.NO_SALUDABLE);
        datos.setDieta(Dieta.VEGANA);

        when(repo.findById(1L)).thenReturn(Optional.of(receta));
        when(repo.save(any(Receta.class))).thenReturn(receta);

        Receta actualizado = service.actualizar(1L, datos);
        assertThat(actualizado.getNombre()).isEqualTo("Nuevo");
        verify(repo).save(receta);
    }

    @Test
    void testEliminar() {
        doNothing().when(repo).deleteById(1L);
        service.eliminar(1L);
        verify(repo).deleteById(1L);
    }
}