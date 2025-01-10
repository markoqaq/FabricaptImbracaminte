import React, { useState, useEffect } from 'react';
import EchipamenteService from '../api/echipamente';
import EchipamentePic from '../Poze/EchipamentePic.jpg';

function AddEchipamente() {
    const [echipament, setEchipament] = useState({
        nume: '',
        stare: '',
        istoricReparatii: ''
    });

    const [echipamenteList, setEchipamenteList] = useState([]);

    useEffect(() => {
        fetchEchipamente();
    }, []);

    const fetchEchipamente = () => {
        EchipamenteService.getAllEchipamente()
            .then(response => {
                setEchipamenteList(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the echipamente!', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEchipament({ ...echipament, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EchipamenteService.addEchipament(echipament)
            .then(response => {
                console.log('Echipament added successfully', response.data);
                fetchEchipamente(); // Refresh the list after adding a new echipament
                setEchipament({ nume: '', stare: '', istoricReparatii: '' }); // Clear the form
            })
            .catch(error => {
                console.error('There was an error adding the echipament!', error);
            });
    };

    return (
        <div className="container" style={{backgroundImage:`url(${EchipamentePic})`, backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw',backgroundPosition:'center', color: 'white'}}>
            <h2>Add Echipament</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nume</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nume"
                        value={echipament.nume}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Stare</label>
                    <input
                        type="text"
                        className="form-control"
                        name="stare"
                        value={echipament.stare}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Istoric Reparatii</label>
                    <input
                        type="date"
                        className="form-control"
                        name="istoricReparatii"
                        value={echipament.istoricReparatii}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adauga Echipament</button>
            </form>

            <h2>Lista de Echipamente</h2>
            <ul className="list-group">
                {echipamenteList.map((item) => (
                    <li key={item.id} className="list-group-item" style={{color: 'black'}}>
                        {item.nume} - {item.stare} - {item.istoricReparatii}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddEchipamente;