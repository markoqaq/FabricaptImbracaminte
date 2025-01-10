import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/prodFinite";

class ProduseFiniteService {
    getAllProduseFinite() {
        return axios.get(API_BASE_URL);
    }

    addProduseFinite(produseFinite) {
        return axios.post(API_BASE_URL, produseFinite);
    }

    updateProduseFinite(id, produseFinite) {
        return axios.put(`${API_BASE_URL}/${id}`, produseFinite);
    }

    deleteProduseFinite(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new ProduseFiniteService();
