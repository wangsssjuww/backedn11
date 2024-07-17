import { useEffect, useState } from "react";
import apis from '../../api/siswa';
import UpdateSiswa from "./UpdateSiswa";

const GetSiswa = () => {
    const [siswa, setSiswa] = useState([]);
    const [error, setError] = useState(null);
    const [nis, setNis] = useState('');
    const [_nis, set_Nis] = useState('');
    const [swa, setSwa] = useState({})
    const [isDelete, setIsDelete] =useState(false);

    const [ isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (data) => {
        console.log(data);
        setSwa({...swa, ...data})
        console.log(swa);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await apis.getAllSiswa();
                if (nis) {
                    response = await apis.getAllSiswaByNis(nis);
                }
                setSiswa(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [nis, isModalOpen,isDelete]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleDelete = async (nis) => {
        try {
            await apis.deleteSiswa(nis);
            setIsDelete(!isDelete);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <>
            <div className="flex flex-row justify-between">
                <h1 className="text-2x1 font-bold mt-2">Daftar Siswa</h1>
                <div>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium
                        text-gray-900 sr-only dark:text-white"
                    >Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 flex items-center pl-3
                                pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500
                                    dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://ww.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" value={nis} className="block w-full p-4 pl-10
                                        text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Cari NIS" onChange={(e) => {setNis(e.target.value)}}/>
                                <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700
                                        hoverbg-blue-800 focus:ring-4 focus:outline-none
                                        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {setNis(nis)}}></button>
                            </div>
                        </div>
                    </div>
                        <table className="min-w-full divide-y divide-gray-200 mt-4">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                             uppercase tracking-wider">
                                        NIS
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                             uppercase tracking-wider">
                                        NAMA
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                             uppercase tracking-wider">
                                        ANGKATAN
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                             uppercase tracking-wider">
                                        JURUSAN
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {siswa.map((swa) => (
                                    <tr key={siswa.nis} className="bg-white dark:bg-gray-600 hover:bg-gray-50
                                        dark:hover:bg-gray-500 drak:text-white">
                                        <td className="px-6 py-4 font-sm whitespace-nowrap">{siswa.nis}</td>
                                        <td className="px-6 py-4 font-sm whitespace-nowrap">{siswa.nama}</td>
                                        <td className="px-6 py-4 font-sm whitespace-nowrap">{siswa.angkatan}</td>
                                        <td className="px-6 py-4 font-sm whitespace-nowrap">{siswa.jurusan}</td>
                                        <td className="px-6 py-4 font-sm whitespace-nowrap">
                                        <div className="flex flex-row justify-start">
                                            <button className="text-slate-800 underline cursor-pointer hover:text-blue-800"
                                                    onClick={() => { openModal(mhs) }}>Edit</button>
                                            <button className="text-white text-md bg-red-700 py-1 px-2 cursor-pointer hover:bg-red-900 ml-4"
                                                    onClick={() => { handleDelete(mhs.nim )}}>Hapus</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <UpdateSiswa isOpen={isModalOpen} onClose={closeModal} swa={swa} />                    
        </>
    )
}
export default GetSiswa;