import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/clienti";

class ClientService {
    getAllClienti() {
        return axios.get(API_BASE_URL);
    }

    addClient(client) {
        return axios.post(API_BASE_URL, client);
    }

    updateClient(id, client) {
        return axios.put(`${API_BASE_URL}/${id}`, client);
    }

    deleteClient(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new ClientService();
