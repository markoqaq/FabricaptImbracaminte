package com.example.backend.resource;

import com.example.backend.domain.MateriiPrime;
import com.example.backend.service.MateriiPrimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materii-prime")
public class MateriiPrimeController {

    private final MateriiPrimeService materiiPrimeService;

    public MateriiPrimeController(MateriiPrimeService materiiPrimeService) {
        this.materiiPrimeService = materiiPrimeService;
    }

    @GetMapping
    public List<MateriiPrime> getAllMateriiPrime() {
        return materiiPrimeService.getAllMateriiPrime();
    }

    @PostMapping
    public MateriiPrime createMateriePrima(@RequestBody MateriiPrime materiePrima) {
        return materiiPrimeService.saveMateriePrima(materiePrima);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MateriiPrime> updateMateriePrima(@PathVariable Long id, @RequestBody MateriiPrime materiePrimaDetails) {
        return materiiPrimeService.updateMateriePrima(id, materiePrimaDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMateriePrima(@PathVariable Long id) {
        materiiPrimeService.deleteMateriePrima(id);
        return ResponseEntity.noContent().build();
    }
}
