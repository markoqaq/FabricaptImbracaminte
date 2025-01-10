import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAngajat from "./components/addAngajat.jsx";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AddMatPrime from "./components/addMatPrime.jsx";
import ProdFinite from "./api/prodFinite.jsx";
import AddProdFinite from "./components/addprodFinite.jsx";
import AddComenzi from "./components/addComenzi.jsx";
import AddEchipamente from "./components/AddEchipamente.jsx";
import AddClienti from "./components/addClienti.jsx";

function App() {
    return (
        <Router>
            <nav className="navbar bg-dark-subtle">
                <div className="container-fluid bg-dark-subtle">
                    <Link className="navbar-brand" to="/">
                        <i className="fab fa-react " style={{ marginLeft: '5px'}}></i>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/add-angajat" element={<AddAngajat/>}/>
                <Route path="/add-matprime" element={<AddMatPrime/>}/>
                <Route path="/add-prodfinite" element={<AddProdFinite/>}/>
                <Route path="/add-comenzi" element ={<AddComenzi/>}/>
                <Route path="/add-echipamente" element={<AddEchipamente/>}/>
                <Route path="/add-clienti" element ={<AddClienti/>}/>
            </Routes>
        </Router>
    );
}

export default App;