import logoFooter from "../assets/logo-footer.png"
import rootLogoFooter from "../assets/root-logo-footer.png"
import arqLogoFooter from "../assets/arq-logo-footer.png"

const FooterTyPage = () => {
    return (
        <>

            <div className="container my-100">
                <div className="row col-lg-12 justify-content-between align-items-center">
                    <div className="col-8 col-lg-2">
                        <img className="logo-mob" src={logoFooter} alt="" />

                    </div>
                    <div className="col-8 col-lg-6">
                        <div>
                            <img className="logo-mob" src={rootLogoFooter} alt="" />
                            <img className="logo-mob" src={arqLogoFooter} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container text-center text-black-50 mt-5">
                    <p className="mt-auto text-uppercase"><b>A<span className="text-decoration-underline">O</span>RA</b>. Todos los derechos reservados. Imagenes y renders ilustrativos, no contractuales.</p>
                </div>
            </div>

        </>
    )
}

export default FooterTyPage