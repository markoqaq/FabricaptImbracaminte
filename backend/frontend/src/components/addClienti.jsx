import React, { useState, useEffect } from 'react';
import ClientService from '../api/clienti';
import pozafundalclienti from '../Poze/HM-scaled.jpg';

function AddClienti() {
    const [client, setClient] = useState({
        nume: '',
        email: '',
        telefon: ''
    });

    const [clientiList, setClientiList] = useState([]);
    const [editingClientId, setEditingClientId] = useState(null);

    useEffect(() => {
        fetchClienti();
    }, []);

    const fetchClienti = () => {
        ClientService.getAllClienti()
            .then(response => {
                setClientiList(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the clienti!', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingClientId) {
            ClientService.updateClient(editingClientId, client)
                .then(response => {
                    console.log('Client updated successfully', response.data);
                    fetchClienti();
                    setClient({ nume: '', email: '', telefon: '' });
                    setEditingClientId(null);
                })
                .catch(error => {
                    console.error('There was an error updating the client!', error);
                });
        } else {
            ClientService.addClient(client)
                .then(response => {
                    console.log('Client added successfully', response.data);
                    fetchClienti();
                    setClient({ nume: '', email: '', telefon: '' });
                })
                .catch(error => {
                    console.error('There was an error adding the client!', error);
                });
        }
    };

    const handleEdit = (client) => {
        setClient(client);
        setEditingClientId(client.id);
    };

    const handleDelete = (id) => {
        ClientService.deleteClient(id)
            .then(response => {
                console.log('Client deleted successfully', response.data);
                fetchClienti();
            })
            .catch(error => {
                console.error('There was an error deleting the client!', error);
            });
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${pozafundalclienti})`, backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw', backgroundPosition: 'center', color: 'white' }}>
            <h2>{editingClientId ? 'Edit Client' : 'Add Client'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nume</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nume"
                        value={client.nume}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={client.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Telefon</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="telefon"
                        value={client.telefon}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {editingClientId ? 'Update Client' : 'Add Client'}
                </button>
            </form>

            <h2>Lista de Clienti</h2>
            <ul className="list-group">
                {clientiList.map((item) => (
                    <li key={item.id} className="list-group-item" style={{ color: 'black' }}>
                        {item.nume} - {item.email} - {item.telefon}
                        <button onClick={() => handleEdit(item)} className="btn btn-secondary btn-sm ml-2">Edit</button>
                        <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddClienti;