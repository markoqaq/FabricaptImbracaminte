package com.example.backend.repo;

import com.example.backend.domain.Echipament;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EchipamentRepository extends JpaRepository<Echipament, Long> {
}
