import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/matPrime";

class MateriiPrimeService {
    getAllMateriiPrime() {
        return axios.get(API_BASE_URL);
    }

    addMateriiPrime(materiiPrime) {
        return axios.post(API_BASE_URL, materiiPrime);
    }

    updateMateriiPrime(id, materiiPrime) {
        return axios.put(`${API_BASE_URL}/${id}`, materiiPrime);
    }

    deleteMateriiPrime(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new MateriiPrimeService();
