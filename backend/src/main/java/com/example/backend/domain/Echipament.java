package com.example.backend.domain;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Echipament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nume;
    private String stare;
    private LocalDate istoricReparatii;

    public Echipament() {}

    public Echipament(String nume, String stare, LocalDate istoricReparatii) {
        this.nume = nume;
        this.stare = stare;
        this.istoricReparatii = istoricReparatii;
    }

    public Long getId() {
        return id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getStare() {
        return stare;
    }

    public void setStare(String stare) {
        this.stare = stare;
    }

    public LocalDate getIstoricReparatii() {
        return istoricReparatii;
    }

    public void setIstoricReparatii(LocalDate istoricReparatii) {
        this.istoricReparatii = istoricReparatii;
    }
}