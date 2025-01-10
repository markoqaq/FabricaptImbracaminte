package com.example.backend.repo;

import com.example.backend.domain.Angajat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AngajatRepository extends JpaRepository<Angajat, String> {
    List<Angajat> id(Long id);
}