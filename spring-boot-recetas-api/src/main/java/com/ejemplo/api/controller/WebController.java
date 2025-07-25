package com.ejemplo.api.controller;

import com.ejemplo.api.model.Receta;
import com.ejemplo.api.service.RecetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class WebController {
    private final RecetaService service;

    @GetMapping("/web")
    public String verIndex(Model model) {
        model.addAttribute("recetas", service.listar());
        return "index";
    }

    @GetMapping("/recetas/nuevo")
    public String crearForm(Model model) {
        model.addAttribute("receta", new Receta());
        return "nuevo";
    }

    @PostMapping("/recetas")
    public String guardarReceta(Receta receta) {
        service.crear(receta);
        return "redirect:/web";
    }
}