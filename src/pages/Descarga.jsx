import DescargaComponent from "../components/DescargaComponent"
import FooterTyPage from "../components/FooterTyPage"


const Descarga = () => {

    return (
        <>

            <div className="hero-bg home-hero d-flex align-items-center">

                <div className="container">
                    <div className="d-flex flex-wrap titulo align-items-center justify-content-center gap-4">
                        <div className="col-lg-6 col-12">
                            <h1 className="text-center ">Tu lugar por naturaleza.</h1>
                        </div>

                        <div className="col-lg-5 col-12">
                            <DescargaComponent />
                        </div>

                    </div>

                </div>

            </div>

            <FooterTyPage />

        </>
    )
}

export default Descarga