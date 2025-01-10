import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/comenzi";

class ComandaService {
    getAllComenzi() {
        return axios.get(API_BASE_URL);
    }

    addComanda(comanda) {
        return axios.post(API_BASE_URL, comanda);
    }

    updateComanda(id, comanda) {
        return axios.put(`${API_BASE_URL}/${id}`, comanda);
    }

    deleteComanda(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new ComandaService();
