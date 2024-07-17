import React, { useEffect } from "react";
import apis from '../../api/siswa'
import { useState } from "react";

const UpdateSiswa = ({isOpen, onClose, swa}) => {
    const [_swa, set_Swa] = useState({nim:'', nama:'', angkatan:'', jurusan:''})

    useEffect(() => {
        set_Swa({..._swa, ...swa})
    },[swa])

    const handleInputChange = (event) => {
        set_Swa({
            ..._swa,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await apis.UpdateSiswa(_swa.nis, _swa);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    if(!isOpen) {
       return null; 
    };

    return ( 
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white w-1/3 rounded-lg z-10">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Update Siswa</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="blcok text-gray-700 font-bold mb-1">
                                NIS :
                            </label>
                            <input
                                type="text"
                                name="nis"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                value={_swa.nis}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="blcok text-gray-700 font-bold mb-1">
                                Nama :
                            </label>
                            <input
                                type="text"
                                name="nama"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                value={_swa.nama}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="blcok text-gray-700 font-bold mb-1">
                                Angkatan :
                            </label>
                            <input
                                type="text"
                                name="angkatan"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                value={_swa.angkatan}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="blcok text-gray-700 font-bold mb-1">
                                 Jurusan :
                            </label>
                            <input
                                type="text"
                                name="jurusan"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                value={_swa.jurusan}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-right">
                            <button
                                type="button"
                                className="mr-2 bg-gray-300 px-4 py-2 rounded-md
                                            hover:bg-slate-500 hover:text-white"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-800 text-white px-4 py-2 rounded-md
                                    hover:bg-blue-800"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
};
 
export default UpdateSiswa;