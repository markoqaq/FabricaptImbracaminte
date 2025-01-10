package com.example.backend.resource;

import com.example.backend.domain.ProduseFinite;
import com.example.backend.service.ProduseFiniteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prodFinite")
public class ProduseFiniteController {

    private final ProduseFiniteService produseFiniteService;

    public ProduseFiniteController(ProduseFiniteService produseFiniteService) {
        this.produseFiniteService = produseFiniteService;
    }

    @GetMapping
    public List<ProduseFinite> getAllProduseFinite() {
        return produseFiniteService.getAllProduseFinite();
    }

    @PostMapping
    public ProduseFinite createProdusFinis(@RequestBody ProduseFinite produsFinit) {
        return produseFiniteService.saveProdusFinit(produsFinit);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProduseFinite> updateProdusFinit(@PathVariable Long id,
                                                           @RequestBody ProduseFinite produsDetails) {
        return produseFiniteService.updateProdusFinis(id, produsDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProdusFinit(@PathVariable Long id) {
        produseFiniteService.deleteProdusFinit(id);
        return ResponseEntity.noContent().build();
    }
}