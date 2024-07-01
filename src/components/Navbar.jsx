import { Link } from "react-router-dom"
import logoImg from "../assets/AORA-logo.png"


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex align-content-center justify-content-center responsive">
                    <Link to={"/"} className="navbar-brand" >
                       <img src={logoImg} alt="AORA" width="90" height="42"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/departamentos'}>DEPARTAMENTOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/comercial'}>COMERCIAL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/amenities'}>AMENITIES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/contacto'}>CONTACTO</Link>
                            </li>
                                 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar