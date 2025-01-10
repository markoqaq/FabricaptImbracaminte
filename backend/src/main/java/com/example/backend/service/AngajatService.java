package com.example.backend.service;

import com.example.backend.domain.Angajat;
import com.example.backend.repo.AngajatRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AngajatService {
    private final AngajatRepository angajatRepository;

    public AngajatService(AngajatRepository angajatRepository) {
        this.angajatRepository = angajatRepository;
    }

    public List<Angajat> getAllAngajati() {
        return angajatRepository.findAll();
    }

    public Angajat saveAngajat(Angajat angajat) {
        return angajatRepository.save(angajat);
    }


}
