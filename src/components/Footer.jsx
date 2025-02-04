import rightArrow from "../assets/right-arrow.svg"
import logoFooter from "../assets/logo-footer.png"
import rootLogoFooter from "../assets/root-logo-footer.png"
import arqLogoFooter from "../assets/arq-logo-footer.png"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import sendTokkoApi from "../helpers/sendTokkoApi"


const Footer = () => {

    const [pageURL, setPageURL] = useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')
    const tags = [selectedOption, pageURL]

    useEffect(() => {
        setPageURL(`Form footer ${window.location.href}`)

    }, [])

    const navigate = useNavigate()

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (nombre && apellido && telefono && mail && selectedOption !== '') {
            const data = {
                api_key: import.meta.env.VITE_TOKKO_API_KEY,
                name: `${nombre} ${apellido}`,
                phone: telefono,
                email: mail,
                tags: tags
            }
            try {
                const response = await sendTokkoApi(data)
                if (response) {
                    navigate('/typage')
                }
            } catch (error) {
                alert('Error al enviar formulario')
                console.error('Error:', error);
            }

        } else {
            alert('Completa todos los campos')
        }

    }

    return (
        <>

            <div id="footer" className="container my-100">

                <h3>
                    CONTACTO
                </h3>

                <form onSubmit={handleSubmit} className="mt-5" action="">
                    <div className="row g-2 row-gap-2">
                        <input type="hidden" name="footer-form" value={pageURL} />
                        <div className="col-12 col-lg-6">
                            <input onChange={(e) => setNombre(e.target.value)} className="input-footer col-12" type="text" placeholder="Nombre" required />
                        </div>
                        <div className="col-12 col-lg-6">
                            <input onChange={(e) => setApellido(e.target.value)} className="input-footer col-12" type="text" placeholder="Apellido" required />
                        </div>
                        <div className="col-12 col-lg-6">
                            <input onChange={(e) => setTelefono(e.target.value)} className="input-footer col-12" type="text" placeholder="Teléfono" required />
                        </div>
                        <div className="col-12 col-lg-6">
                            <input onChange={(e) => setMail(e.target.value)} className="input-footer col-12" type="text" placeholder="E-mail" required />
                        </div>
                        <div className="col-12 col-lg-6">
                            <select className="col-12 form-select-lg mb-3 " aria-label=" select example" value={selectedOption} onChange={handleSelectChange} required>
                                <option disabled selected value="">Selecciona el tipo de unidad</option>
                                <option value="Depto. 2 ambientes">Departamento de 2 ambientes</option>
                                <option value="Depto. 3 ambientes">Departamento de 3 ambientes</option>
                                <option value="Local">Local</option>
                                <option value="Oficina">Oficina</option>
                            </select>
                        </div>
                        <div className="col-12 col-lg-6">
                            <button className="button d-flex align-items-center justify-content-center gap-2 col-12 " type="submit">
                                <p className="lh-lg m-0">ENVIAR</p>
                                <img src={rightArrow} alt="flecha-derecha" />
                            </button>
                        </div>
                    </div>

                </form>

                <div className="container my-100">
                    <div className="row col-lg-12 justify-content-between align-items-center">
                        <div className=" col-8 col-lg-2">
                            <img className="logo-mob" src={logoFooter} alt="" />

                        </div>
                        <div className=" col-8 col-lg-6">
                            <div>
                                <img className="logo-mob" src={rootLogoFooter} alt="" />
                                <img className="logo-mob" src={arqLogoFooter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center text-black-50">
                    <p className="mt-auto text-uppercase"><b>A<span className="text-decoration-underline">O</span>RA</b>. Todos los derechos reservados. Imagenes y renders ilustrativos, no contractuales.</p>
                </div>
            </div>

        </>
    )
}

export default Footer