import rightArrow from "../assets/right-arrow.svg"
import logoFooter from "../assets/logo-footer.png"
import rootLogoFooter from "../assets/root-logo-footer.png"
import arqLogoFooter from "../assets/arq-logo-footer.png"


const Footer = () => {
    return (
        <>

            <div className="container my-100">

                <h3>
                    CONTACTO
                </h3>

                <form className="mt-5" action="">
                    <div className="row g-2 row-gap-2">
                        <div className="col-6">
                            <input className="input-footer col-12" type="text" placeholder="Nombre" required />
                        </div>
                        <div className="col-6">
                            <input className="input-footer col-12" type="text" placeholder="Apellido" required />
                        </div>
                        <div className="col-6">
                            <input className="input-footer col-12" type="text" placeholder="Teléfono" required />
                        </div>
                        <div className="col-6">
                            <input className="input-footer col-12" type="text" placeholder="E-mail" required />
                        </div>
                        <div className="col-6">
                            <select className="col-12 form-select-lg mb-3 " aria-label=" select example" required>
                                <option disabled selected value="">Selecciona el tipo de unidad</option>
                                <option value="1">Departamento de 2 ambientes</option>
                                <option value="2">Departamento de 3 ambientes</option>
                                <option value="3">Local</option>
                                <option value="3">Oficina</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <button className="button d-flex align-items-center justify-content-center gap-2 col-12 " type="submit">
                                <p className="lh-lg m-0">ENVIAR</p>
                                <img src={rightArrow} alt="flecha-derecha" />
                            </button>
                        </div>
                    </div>

                </form>

                <div className="container d-flex justify-content-between align-items-center my-100">
                    <img src={logoFooter} alt="" />
                    <div className="logos">
                        <img src={rootLogoFooter} alt="" />
                        <img src={arqLogoFooter} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer