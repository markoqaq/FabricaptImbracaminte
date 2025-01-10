package com.example.backend.domain;

import jakarta.persistence.*;

@Entity
public class ProduseFinite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String denumire;
    private String descriere;
    private Integer stoc;
    private Double pret;

    public ProduseFinite() {
    }

    public ProduseFinite(String denumire, String descriere, Integer stoc, Double pret) {
        this.denumire = denumire;
        this.descriere = descriere;
        this.stoc = stoc;
        this.pret = pret;
    }

    public Long getId() {
        return id;
    }

    public String getDenumire() {
        return denumire;
    }

    public void setDenumire(String denumire) {
        this.denumire = denumire;
    }

    public String getDescriere() {
        return descriere;
    }

    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }

    public Integer getStoc() {
        return stoc;
    }

    public void setStoc(Integer stoc) {
        this.stoc = stoc;
    }

    public Double getPret() {
        return pret;
    }

    public void setPret(Double pret) {
        this.pret = pret;
    }

}
