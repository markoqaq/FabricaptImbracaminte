package com.example.backend.service;

import com.example.backend.domain.ProduseFinite;
import com.example.backend.repo.ProduseFiniteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduseFiniteService {
    private final ProduseFiniteRepository produseFiniteRepository;

    public ProduseFiniteService(ProduseFiniteRepository produseFiniteRepository) {
        this.produseFiniteRepository = produseFiniteRepository;
    }

    public List<ProduseFinite> getAllProduseFinite() {
        return produseFiniteRepository.findAll();
    }

    public ProduseFinite saveProdusFinit(ProduseFinite produsFinis) {
        return produseFiniteRepository.save(produsFinis);
    }

    public Optional<ProduseFinite> updateProdusFinis(Long id, ProduseFinite produsDetails) {
        return produseFiniteRepository.findById(id).map(produs -> {
            produs.setDenumire(produsDetails.getDenumire());
            produs.setDescriere(produsDetails.getDescriere());
            produs.setStoc(produsDetails.getStoc());
            produs.setPret(produsDetails.getPret());
            return produseFiniteRepository.save(produs);
        });
    }

    public void deleteProdusFinit(Long id) {
        produseFiniteRepository.deleteById(id);
    }
}