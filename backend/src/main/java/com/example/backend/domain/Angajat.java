package com.example.backend.domain;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Angajat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nume;
    private String functie;
    private LocalDate dataAngajarii;

    // Constructori
    public Angajat() {}

    public Angajat(String nume, String functie, LocalDate dataAngajarii) {
        this.nume = nume;
        this.functie = functie;
        this.dataAngajarii = dataAngajarii;
    }

    // Getteri și Setteri
    public Long getId() {
        return id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getFunctie() {
        return functie;
    }

    public void setFunctie(String functie) {
        this.functie = functie;
    }

    public LocalDate getDataAngajarii() {
        return dataAngajarii;
    }

    public void setDataAngajarii(LocalDate dataAngajarii) {
        this.dataAngajarii = dataAngajarii;
    }
}