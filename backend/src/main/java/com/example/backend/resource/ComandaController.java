package com.example.backend.resource;

import com.example.backend.domain.Comanda;
import com.example.backend.service.ComandaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comenzi")
public class ComandaController {
    private final ComandaService comandaService;

    public ComandaController(ComandaService comandaService) {
        this.comandaService = comandaService;
    }

    @GetMapping
    public List<Comanda> getAllComenzi() {
        return comandaService.getAllComenzi();
    }

    @PostMapping
    public Comanda createComanda(@RequestBody Comanda comanda) {
        return comandaService.saveComanda(comanda);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comanda> updateComanda(@PathVariable Long id, @RequestBody Comanda comandaDetails) {
        return comandaService.updateComanda(id, comandaDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComanda(@PathVariable Long id) {
        comandaService.deleteComanda(id);
        return ResponseEntity.noContent().build();
    }
}