import { useEffect, useState } from "react"
import rightArrow from "../assets/right-arrow.svg"
import { useNavigate } from "react-router-dom"
import sendTokkoApi from "../helpers/sendTokkoApi"



const FormHeader = () => {

    const [selectedOption, setSelectedOption] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')
    const [pageURL, setPageURL] = useState('')
    const tags = pageURL


    useEffect(() => {
        setPageURL(`Form hero ${window.location.href}`)

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
                mail: mail,
                message: `Tipo de unidad: ${selectedOption}, Page URL: ${pageURL}`,
                tags: tags
            }
            console.log(data)
            try {
                const response = await sendTokkoApi(data)
                if (response) {
                    navigate('/typage')
                    console.log(nombre, apellido, telefono, mail, selectedOption, pageURL, tags)
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

            <div className="form-container d-flex flex-column justify-content-center p-8 col-12 col-lg-6 mb-4">
                <h2 className="text-center ms-auto me-auto col-12 col-lg-10 fw-normal">
                    Dejanos tus datos y nos contactaremos con vos.
                </h2>

                <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column gap-2" action="https://formspree.io/f/mdknokeo" method="POST">
                    <input type="hidden" name="URL" value={pageURL} />
                    <input onChange={(e) => setNombre(e.target.value)} className="input" name="Nombre" type="text" placeholder="Nombre" required />
                    <input onChange={(e) => setApellido(e.target.value)} className="input" name="Apellido" type="text" placeholder="Apellido" required />
                    <input onChange={(e) => setTelefono(e.target.value)} className="input" name="Telefono" type="text" placeholder="Teléfono" required />
                    <input onChange={(e) => setMail(e.target.value)} className="input" type="text" name="Email" placeholder="E-mail" required />
                    <select className="form-select form-select-lg mb-3" aria-label="Large select example" name="Unidad" value={selectedOption}
                        onChange={handleSelectChange} required>
                        <option disabled selected value="">Selecciona el tipo de unidad</option>
                        <option value="depto-2-ambientes">Departamento de 2 ambientes</option>
                        <option value="depto-3-ambientes">Departamento de 3 ambientes</option>
                        <option value="Local">Local</option>
                        <option value="Oficina">Oficina</option>
                    </select>
                    <button className="button d-flex align-items-center justify-content-center gap-2 " type="submit">
                        <p className="lh-lg m-0">ENVIAR</p>
                        <img src={rightArrow} alt="flecha-derecha" />
                    </button>
                </form>
            </div>

        </>
    )
}

export default FormHeader