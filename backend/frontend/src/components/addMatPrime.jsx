import React, { useState, useEffect } from 'react';
import MateriiPrimeService from '../api/matPrime';
import materialePhoto from '../Poze/materiale.jpg';

function AddMatPrime() {
    const [materiiPrime, setMateriiPrime] = useState({
        denumire: '',
        descriere: '',
        stoc: '',
        pret: ''
    });

    const [materiiPrimeList, setMateriiPrimeList] = useState([]);

    useEffect(() => {
        fetchMateriiPrime();
    }, []);

    const fetchMateriiPrime = () => {
        MateriiPrimeService.getAllMateriiPrime()
            .then(response => {
                setMateriiPrimeList(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the Materii Prime!', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMateriiPrime({ ...materiiPrime, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        MateriiPrimeService.addMateriiPrime(materiiPrime)
            .then(response => {
                console.log('Materii Prime added successfully', response.data);
                fetchMateriiPrime(); // Refresh the list after adding a new Materii Prime
                setMateriiPrime({ denumire: '', descriere: '', stoc: '', pret: '' }); // Clear the form
            })
            .catch(error => {
                console.error('There was an error adding the Materii Prime!', error);
            });
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${materialePhoto})`, backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw',backgroundPosition:"center" }}>
            <h2>Add Materii Prime</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Denumire</label>
                    <input
                        type="text"
                        className="form-control"
                        name="denumire"
                        value={materiiPrime.denumire}
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
                        value={materiiPrime.descriere}
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
                        value={materiiPrime.stoc}
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
                        value={materiiPrime.pret}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adauga Materii Prime</button>
            </form>

            <h2>Lista de Materii Prime</h2>
            <ul className="list-group">
                {materiiPrimeList.map((item) => (
                    <li key={item.id} className="list-group-item">
                        {item.denumire} - {item.descriere} - {item.stoc} - {item.pret}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddMatPrime;