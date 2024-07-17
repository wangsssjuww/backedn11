import axios from "axios";
import CreateSiswa from "../componen/admin/CreateSiswa";
import UpdateSiswa from "../componen/admin/UpdateSiswa";

const api = axios.create({
    baseURL:"http://localhost:5000",
});

const apis = {
    getAllSiswa: ()=>api.get('/siswa'),
    getSiswaByNis: (nis) => api.get(`/siswa/${nis}`),
    CreateSiswa : (data) => api.post('/siswa', data),
    UpdateSiswa : (nim, data) => api.put(`/siswa/${nis}`, data),
};

export default apis;