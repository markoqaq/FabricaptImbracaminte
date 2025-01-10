import React, { useState, useEffect } from 'react';
import ProdFiniteService from '../api/prodFinite';

function AddProdFinite() {
    const [prodFinite, setProdFinite] = useState({
        denumire: '',
        descriere: '',
        cantitate: '',
        pret: ''
    });

    const [prodFiniteList, setProdFiniteList] = useState([]);

    useEffect(() => {
        fetchProdFinite();
    }, []);

    const fetchProdFinite = () => {
        ProdFiniteService.getAllProdFinite()
            .then(response => {
                setProdFiniteList(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the ProdFinite!', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdFinite({ ...prodFinite, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ProdFiniteService.addProdFinite(prodFinite)
            .then(response => {
                console.log('ProdFinite added successfully', response.data);
                fetchProdFinite(); // Refresh the list after adding a new ProdFinite
                setProdFinite({ denumire: '', descriere: '', cantitate: '', pret: '' }); // Clear the form
            })
            .catch(error => {
                console.error('There was an error adding the ProdFinite!', error);
            });
    };

    return (
        <div className="container">
            <h2>Add ProdFinite</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Denumire</label>
                    <input
                        type="text"
                        className="form-control"
                        name="denumire"
                        value={prodFinite.denumire}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Descriere</label>
                    <input
                        type="text"
                        className="form-control"
                        name="descriere"
                        value={prodFinite.descriere}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cantitate</label>
                    <input
                        type="number"
                        className="form-control"
                        name="cantitate"
                        value={prodFinite.cantitate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Pret</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="pret"
                        value={prodFinite.pret}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adauga ProdFinite</button>
            </form>

            <h2>Lista de ProdFinite</h2>
            <ul className="list-group">
                {prodFiniteList.map((item) => (
                    <li key={item.id} className="list-group-item">
                        {item.denumire} - {item.descriere} - {item.cantitate} - {item.pret}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddProdFinite;