package com.example.backend.resource;

import com.example.backend.domain.ProduseFinite;
import com.example.backend.service.ProduseFiniteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/produse-finite")
public class ProduseFiniteController {

    private final ProduseFiniteService produseFiniteService;
    private final String UPLOAD_DIR = "uploads/"; // Director pentru upload

    public ProduseFiniteController(ProduseFiniteService produseFiniteService) {
        this.produseFiniteService = produseFiniteService;
    }

    @GetMapping
    public List<ProduseFinite> getAllProduseFinite() {
        return produseFiniteService.getAllProduseFinite();
    }

    @PostMapping
    public ProduseFinite createProdusFinis(@RequestParam("denumire") String denumire,
                                           @RequestParam("descriere") String descriere,
                                           @RequestParam("stoc") Integer stoc,
                                           @RequestParam("pret") Double pret,
                                           @RequestParam(value = "poza", required = false) MultipartFile poza) throws IOException {
        String pozaUrl = null;
        if (poza != null && !poza.isEmpty()) {
            Path path = Paths.get(UPLOAD_DIR + poza.getOriginalFilename());
            Files.createDirectories(path.getParent());
            Files.write(path, poza.getBytes());
            pozaUrl = path.toString();
        }

        ProduseFinite produsFinit = new ProduseFinite(denumire, descriere, stoc, pret, pozaUrl);
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
