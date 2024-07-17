import { useNavigate } from "react-router-dom";

const NotLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="border border-slate-500 rounded-lg mx-auto mt-8 p-8 w-1/3 
                        text-center">
            <h3 className="text-2xl text-red-500">Anda belum login</h3>

            <div className="px-4 py-2 mt-2">
                Silakan 
                <span className="text-blue-700 italic underline font-medium cursor-pointer"
                    onClick={() => { navigate('/') }}
                > Login </span> terlebih dahulu
            </div>
        </div>
    );
}

export default NotLogin;