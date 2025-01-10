import React, { useState, useEffect } from 'react';
import AngajatService from '../api/angajati';
import AngajatiPic from '../Poze/AngajatiPic.jpg';

function AddAngajat() {
    const [angajat, setAngajat] = useState({
        nume: '',
        functie: '',
        dataAngajarii: ''
    });

    const [angajati, setAngajati] = useState([]);

    useEffect(() => {
        fetchAngajati();
    }, []);

    const fetchAngajati = () => {
        AngajatService.getAllAngajati()
            .then(response => {
                setAngajati(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the angajati!', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAngajat({ ...angajat, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        AngajatService.addAngajat(angajat)
            .then(response => {
                console.log('Angajat added successfully', response.data);
                fetchAngajati(); // Refresh the list after adding a new angajat
                setAngajat({ nume: '', functie: '', dataAngajarii: '' }); // Clear the form
            })
            .catch(error => {
                console.error('There was an error adding the angajat!', error);
            });
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${AngajatiPic})`, backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw' }}>
            <h2>Add Angajat</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nume</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nume"
                        value={angajat.nume}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Functie</label>
                    <input
                        type="text"
                        className="form-control"
                        name="functie"
                        value={angajat.functie}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Data Angajarii</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dataAngajarii"
                        value={angajat.dataAngajarii}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adauga Angajat</button>
            </form>

            <h2>Lista de Angajati</h2>
            <ul className="list-group">
                {angajati.map((angajat) => (
                    <li key={angajat.id} className="list-group-item">
                        {angajat.nume} - {angajat.functie} - {angajat.dataAngajarii}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddAngajat;