import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/angajati";

class AngajatService {
    getAllAngajati() {
        return axios.get(API_BASE_URL);
    }

    addAngajat(angajat) {
        return axios.post(API_BASE_URL, angajat);
    }
}

export default new AngajatService();
