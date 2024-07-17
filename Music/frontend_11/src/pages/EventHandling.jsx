import React, { useState } from "react";

const EventHandling = () => {
    const [name, setName] = useState('');
    const [alamat, setAlamat] = useState('');
    const [gender, setGender] = useState('Pria');
    const [selectedOption, setSelectedOption] = useState('Teknik Komputer');

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }
    function handleGenderChange(event) {
        setGender(event.target.value);
    }
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleAlamatChange(event){
        setAlamat(event.target.value);
    }
    function handleClick(){
        alert('Tombol ini diklik!');
    }

    return ( 
        <div className="container mt-4 ml-4 flex">
            <div className="w-1/2">
                <h3 className="text-2xl font-semibold">Form Pendaftaran</h3>
                <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Nama :
                    </label>
                    <input
                        type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan nama Anda"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="Alamat" className="block text-gray-700 font-bold mb-2">
                        Alamat :
                    </label>
                    <input
                        type="text" id="Alamat" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan Alamat Anda"
                        value={alamat}
                        onChange={handleAlamatChange}
                    />
                </div>
                <div className="mt-8">
                    <span className="block text-gray-700 font-bold mb-2">Gender : </span>
                    <div className="flex flex-row items-center mr-6">
                        <label className="inline-flex items-center mr-6">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                name="gender"
                                value="pria"
                                checked={gender === 'Pria'}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Pria</span>
                        </label>
                        <label className="inline-flex items-center mr-6">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                name="gender"
                                value="wanita"
                                checked={gender === 'Wanita'}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Wanita</span>
                        </label>
                    </div>
                </div>
                <div className="mt-8">
                    <label htmlFor="jurusan" className="block text-gray-700 font-bold mb-2">
                        Jurusan
                    </label>
                    <select
                        id="jurusan"
                        className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="Teknik Komputer">Teknik Komputer</option>
                        <option value="Teknik Listrik">Teknik Listrik</option>
                        <option value="Teknik Audio Video">Teknik Audio Video</option>
                        <option value="Teknik Las">Teknik Las</option>
                        <option value="Teknik Mesin">Teknik Mesin</option>
                    </select>
                </div>
                <button
                    className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClick}
                >
                    Klik saya
                </button>
            </div>
            <div className="w-1/2 pl-8">
                <h2 className="text-xl font-bold mb-4">Resume</h2>
                <p className="text-gray-700"><strong>Nama: </strong>{name}</p>
                <p className="text-gray-700"><strong>Alamat: </strong>{alamat}</p>
                <p className="text-gray-700"><strong>Gender: </strong>{gender}</p>
                <p className="text-gray-700"><strong>Jurusan: </strong>{selectedOption}</p>
            </div>
        </div>
     );
}
 
export default EventHandling;
