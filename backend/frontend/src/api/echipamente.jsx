import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/echipamente";

class EchipamentService {
    getAllEchipamente() {
        return axios.get(API_BASE_URL);
    }

    addEchipament(echipament) {
        return axios.post(API_BASE_URL, echipament);
    }

    deleteEchipament(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new EchipamentService();