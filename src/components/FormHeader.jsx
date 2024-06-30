import { useState } from "react";
import rightArrow from "../assets/right-arrow.svg"



const FormHeader = () => {

    const [selectedOption, setSelectedOption] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre, apellido, telefono, mail, selectedOption)
    }



    return (
        <>

            <div className="form-container d-flex flex-column justify-content-center p-8 col-6">
                <h2 className="text-center ms-auto me-auto col-8 fw-normal">
                    Dejanos tus datos y nos contactaremos con vos.
                </h2>

                <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column gap-2" action="https://formspree.io/f/mdknokeo" method="POST">
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