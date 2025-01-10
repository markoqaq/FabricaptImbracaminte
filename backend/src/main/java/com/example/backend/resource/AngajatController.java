package com.example.backend.resource;

import com.example.backend.domain.Angajat;
import com.example.backend.service.AngajatService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/angajati")
public class AngajatController {
    private final AngajatService angajatService;

    public AngajatController(AngajatService angajatService) {
        this.angajatService = angajatService;
    }

    @GetMapping
    public List<Angajat> getAllAngajati() {
        return angajatService.getAllAngajati();
    }

    @PostMapping
    public Angajat createAngajat(@RequestBody Angajat angajat) {
        return angajatService.saveAngajat(angajat);
    }

}