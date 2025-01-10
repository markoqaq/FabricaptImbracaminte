import React, { useState, useEffect } from 'react';
import ComenziService from '../api/comenzi';

function AddComenzi() {
    const [comanda, setComanda] = useState({
        dataComanda: '',
        termen: '',
        stoc: '',
        pret: '',
        status: '',
        cantitate: ''
    });

    const [comenziList, setComenziList] = useState([]);

    useEffect(() => {
        fetchComenzi();
    }, []);

    const fetchComenzi = () => {
        ComenziService.getAllComenzi()
            .then(response => {
                setComenziList(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the comenzi!', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComanda({ ...comanda, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ComenziService.addComanda(comanda)
            .then(response => {
                console.log('Comanda added successfully', response.data);
                fetchComenzi(); // Refresh the list after adding a new comanda
                setComanda({ dataComanda: '', termen: '', stoc: '', pret: '', status: '', cantitate: '' }); // Clear the form
            })
            .catch(error => {
                console.error('There was an error adding the comanda!', error);
            });
    };

    return (
        <div className="container">
            <h2>Add Comanda</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Data Comanda</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dataComanda"
                        value={comanda.dataComanda}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Termen</label>
                    <input
                        type="date"
                        className="form-control"
                        name="termen"
                        value={comanda.termen}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Stoc</label>
                    <input
                        type="number"
                        className="form-control"
                        name="stoc"
                        value={comanda.stoc}
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
                        value={comanda.pret}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input
                        type="text"
                        className="form-control"
                        name="status"
                        value={comanda.status}
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
                        value={comanda.cantitate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adauga Comanda</button>
            </form>

            <h2>Lista de Comenzi</h2>
            <ul className="list-group">
                {comenziList.map((item) => (
                    <li key={item.id} className="list-group-item">
                        {item.dataComanda} - {item.termen} - {item.stoc} - {item.pret} - {item.status} - {item.cantitate}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddComenzi;