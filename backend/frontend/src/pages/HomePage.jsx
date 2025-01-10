import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import homepagePhoto from '../Poze/HomePage.jpg';

function HomePage() {
    return (
        <div style={{ backgroundImage: `url(${homepagePhoto})`, backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw', backgroundPosition: 'center' }}>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark-subtle">
                    <div className="container-fluid ">
                        <a className="navbar-brand " href="#">Fabrică de imbrăcăminte</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Functionalitati
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/add-angajat">Angajati</Link></li>
                                        <li><Link className="dropdown-item" to="/add-matprime">Materii Prime</Link></li>
                                        <li><Link className="dropdown-item" to="/add-echipamente">Echipamente</Link>
                                        </li>
                                        <li><Link className="dropdown-item" to="/add-prodfinite">Produse Finite</Link>
                                        </li>
                                        <li><Link className="dropdown-item" to="/add-clienti">Clienti</Link></li>
                                        <li><Link className="dropdown-item" to="/add-comenzi">Comenzi</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HomePage;