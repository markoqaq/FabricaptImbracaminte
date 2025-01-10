package com.example.backend.service;

import com.example.backend.domain.Comanda;
import com.example.backend.repo.ComandaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComandaService {
    private final ComandaRepository comandaRepository;

    public ComandaService(ComandaRepository comandaRepository) {
        this.comandaRepository = comandaRepository;
    }

    public List<Comanda> getAllComenzi() {
        return comandaRepository.findAll();
    }

    public Comanda saveComanda(Comanda comanda) {
        return comandaRepository.save(comanda);
    }

    public Optional<Comanda> updateComanda(Long id, Comanda comandaDetails) {
        return comandaRepository.findById(id).map(comanda -> {
            comanda.setDataComanda(comandaDetails.getDataComanda());
            comanda.setTermen(comandaDetails.getTermen());
            comanda.setStoc(comandaDetails.getStoc());
            comanda.setPret(comandaDetails.getPret());
            comanda.setStatus(comandaDetails.getStatus());
            comanda.setCantitate(comandaDetails.getCantitate());
            return comandaRepository.save(comanda);
        });
    }

    public void deleteComanda(Long id) {
        comandaRepository.deleteById(id);
    }
}
