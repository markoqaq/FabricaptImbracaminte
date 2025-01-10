package com.example.backend.domain;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Comanda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dataComanda;
    private LocalDate termen;
    private Integer stoc;
    private Double pret;
    private String status;
    private Integer cantitate;

    public Comanda() {}

    public Comanda(LocalDate dataComanda, LocalDate termen, Integer stoc, Double pret, String status, Integer cantitate) {
        this.dataComanda = dataComanda;
        this.termen = termen;
        this.stoc = stoc;
        this.pret = pret;
        this.status = status;
        this.cantitate = cantitate;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDataComanda() {
        return dataComanda;
    }

    public void setDataComanda(LocalDate dataComanda) {
        this.dataComanda = dataComanda;
    }

    public LocalDate getTermen() {
        return termen;
    }

    public void setTermen(LocalDate termen) {
        this.termen = termen;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getCantitate() {
        return cantitate;
    }

    public void setCantitate(Integer cantitate) {
        this.cantitate = cantitate;
    }
}