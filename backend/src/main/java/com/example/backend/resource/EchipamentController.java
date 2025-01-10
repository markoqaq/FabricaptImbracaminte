package com.example.backend.resource;

import com.example.backend.domain.Echipament;
import com.example.backend.service.EchipamentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/echipamente")
public class EchipamentController {

    private final EchipamentService echipamentService;

    public EchipamentController(EchipamentService echipamentService) {
        this.echipamentService = echipamentService;
    }

    @GetMapping
    public List<Echipament> getAllEchipamente() {
        return echipamentService.getAllEchipamente();
    }

    @PostMapping
    public Echipament createEchipament(@RequestBody Echipament echipament) {
        return echipamentService.saveEchipament(echipament);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Echipament> updateEchipament(@PathVariable Long id, @RequestBody Echipament echipamentDetails) {
        return echipamentService.updateEchipament(id, echipamentDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEchipament(@PathVariable Long id) {
        echipamentService.deleteEchipament(id);
        return ResponseEntity.noContent().build();
    }
}