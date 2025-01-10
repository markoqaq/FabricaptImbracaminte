package com.example.backend.service;

import com.example.backend.domain.Client;
import com.example.backend.repo.ClientRepository;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAllClienti() {
        return clientRepository.findAll();
    }

    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public Optional<Client> updateClient(Long id, Client clientDetails) {
        return clientRepository.findById(id).map(client -> {
            client.setNume(clientDetails.getNume());
            client.setEmail(clientDetails.getEmail());
            client.setTelefon(clientDetails.getTelefon());
            return clientRepository.save(client);
        });
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
