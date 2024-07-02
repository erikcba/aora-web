import DescargaComponent from "../components/DescargaComponent"
import FooterTyPage from "../components/FooterTyPage"


const Descarga = () => {

    return (
        <>

            <div className="hero-bg home-hero d-flex align-items-center">

                <div className="container">
                    <div className=" titulo d-flex align-items-center justify-content-center gap-4">
                        <h1 className="text-center ">Tu lugar por naturaleza.</h1>
                        <DescargaComponent/>
                    </div>

                </div>

            </div>

            <FooterTyPage/>

        </>
    )
}

export default Descarga