import { useState } from "react";
import apis from "../../api/siswa";

const CreateSiswa = () => {
    const [nis, setNis] = useState('')
    const [nama, setNama] = useState('')
    const [angkatan, setAngkatan] = useState('')
    const [jurusan, setJurusan] = useState('Teknik Informatika')

    const clearForm = () => {
        setNis('')
        setNama('')
        setAngkatan('')
    }

    const addSiswa = async () => {
        if (!nis || !nama || !angkatan || !jurusan) {
            alert('isian tidak boleh kosong')
        }
        else {
            const swaBaru = {nis, nama, angkatan, jurusan};
            try {
                await apis.CreateSiswa(swaBaru);

                alert('Data berhasil ditambah')
                clearForm()
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="w-1/2 mx-auto rounded-lg shadow-lg p-8">
                <h1 className="text-2x1 font-bold">Input Siswa</h1> 
                <div>
                    <div className="mt-4">
                        <label htmlFor="nis" className="block text-gray-700 font-bold mb-2">
                            NIS:
                        </label>
                        <input
                            type="text" id="nis" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex: 1122102035"
                            value={nis}
                            onChange={(e) => { setNis(e.target.value)}}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="nama" className="block text-gray-700 font-bold mb-2">
                            Nama:
                        </label>
                        <input
                            type="text" id="nama" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex: Rull"
                            value={nama}
                            onChange={(e) => {setNama(e.target.value)}}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="angkatan" className="block text-gray-700 font-bold mb-2">
                            Angkatan:
                        </label>
                        <input
                            type="text" id="angkatan" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex: 2022"
                            value={angkatan}
                            onChange={(e) => {setAngkatan(e.target.value)}}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="program-jurusan" className="block text-gray-700 font-bold mb-2">
                            program-jurusan:
                        </label>
                        <select
                            type="text" id="program-jurusan" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={jurusan}
                            onChange={(e) => {setJurusan(e.target.value)}}
                        >
                            <option value={"Teknik Informatika"}>Teknik Informatika</option>
                            <option value={"Teknik Listrik"}>Teknik Listrik</option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <button
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-5"
                            onClick={addSiswa}
                        >
                            Tambah
                        </button>
                    </div>
                </div>   
            </div>
        </>
    );
}

export default CreateSiswa;