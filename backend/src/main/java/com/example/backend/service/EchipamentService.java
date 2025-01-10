package com.example.backend.service;


import com.example.backend.domain.Echipament;
import com.example.backend.repo.EchipamentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EchipamentService {
    private final EchipamentRepository echipamentRepository;

    public EchipamentService(EchipamentRepository echipamentRepository) {
        this.echipamentRepository = echipamentRepository;
    }

    public List<Echipament> getAllEchipamente() {
        return echipamentRepository.findAll();
    }

    public Echipament saveEchipament(Echipament echipament) {
        return echipamentRepository.save(echipament);
    }

    public Optional<Echipament> updateEchipament(Long id, Echipament echipamentDetails) {
        return echipamentRepository.findById(id).map(echipament -> {
            echipament.setNume(echipamentDetails.getNume());
            echipament.setStare(echipamentDetails.getStare());
            echipament.setIstoricReparatii(echipamentDetails.getIstoricReparatii());
            return echipamentRepository.save(echipament);
        });
    }

    public void deleteEchipament(Long id) {
        echipamentRepository.deleteById(id);
    }
}
