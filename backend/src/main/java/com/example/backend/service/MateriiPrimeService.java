package com.example.backend.service;

import com.example.backend.domain.MateriiPrime;
import com.example.backend.repo.MateriiPrimeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MateriiPrimeService {
    private final MateriiPrimeRepository materiiPrimeRepository;

    public MateriiPrimeService(MateriiPrimeRepository materiiPrimeRepository) {
        this.materiiPrimeRepository = materiiPrimeRepository;
    }

    public List<MateriiPrime> getAllMateriiPrime() {
        return materiiPrimeRepository.findAll();
    }

    public MateriiPrime saveMateriePrima(MateriiPrime materiePrima) {
        return materiiPrimeRepository.save(materiePrima);
    }

    public Optional<MateriiPrime> updateMateriePrima(Long id, MateriiPrime materiePrimaDetails) {
        return materiiPrimeRepository.findById(id).map(materiePrima -> {
            materiePrima.setDenumire(materiePrimaDetails.getDenumire());
            materiePrima.setDescriere(materiePrimaDetails.getDescriere());
            materiePrima.setStoc(materiePrimaDetails.getStoc());
            materiePrima.setPret(materiePrimaDetails.getPret());
            return materiiPrimeRepository.save(materiePrima);
        });
    }

    public void deleteMateriePrima(Long id) {
        materiiPrimeRepository.deleteById(id);
    }
}
