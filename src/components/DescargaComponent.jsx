import descargaIcon from "../assets/descarga-icon.svg"
import archivoDescarga from "../assets/AORABV-Slide5.png"

const DescargaComponent = () => {
    return (
        <>

            <div className="form-container d-flex flex-column justify-content-center p-8 col-12 col-lg-6 mb-4">
                <h2 className="text-center ms-auto me-auto col-12 fw-normal">
                    Descargá toda la información de cada tipología y sus unidades
                </h2>

                <a className="text-decoration-none mx-auto" href={archivoDescarga} download="descarga-de-prueba.png">
                    <button className="button d-flex align-items-center justify-content-center gap-2 " type="submit">
                        <img src={descargaIcon} alt="descargar" />
                        <p className="lh-lg m-0">DESCARGAR</p>
                    </button>
                </a>


            </div>

        </>
    )
}

export default DescargaComponent