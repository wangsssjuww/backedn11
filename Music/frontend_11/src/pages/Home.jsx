import Header from "../componen/Header";
import Layout from "../componen/Layout";
import Sidebar from "../componen/Sidebar";
import Utama from "../componen/Utama";
import Navbar from "../componen/Navbar";
import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <button onClick={() => navigate("landingpage")}>
                Landing Page
            </button>
            <Layout>
                <Header/>
                <Link to="/Landingpage" className="mb-8">
                    Landing Page
                </Link>
                <Utama/>
            </Layout >
        </>
     );
}

export default Home;