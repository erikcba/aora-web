import { Link, useLocation } from "react-router-dom"
import logoImg from "../assets/AORA-logo.png"
import { useEffect } from "react";


const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleNavLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex align-content-center justify-content-center responsive">
                    <Link to={"/"} className="navbar-brand" onClick={handleNavLinkClick }>
                        <img src={logoImg} alt="AORA" width="90" height="42" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse pt-2" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/departamentos'} onClick={handleNavLinkClick }>DEPARTAMENTOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/comercial'} onClick={handleNavLinkClick }>COMERCIAL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to={'/amenities'} onClick={handleNavLinkClick }>AMENITIES</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#footer" onClick={handleNavLinkClick }>CONTACTO</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar