import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import FormHeader from "../components/FormHeader"
import arrowDown from "../assets/arrow.png"




const Departamentos = () => {
    return (
        <>

            <div className="hero-bg deptos-hero ">

                <div className="container d-flex align-items-center justify-content-center">
                    <div className="titulo flex-column justify-content-center col-12 col-lg-6 gap-5">
                        <h1>Tu lugar por naturaleza.</h1>
                        <img className="hide" src={arrowDown} alt="arrowDown" />
                    </div>
                    <FormHeader />
                </div>
            </div>

            <div className="container d-flex flex-column gap-3 my-5 px-5">
                <p className="text-center fs-4">El sector residencial está conformado por 11 edificios de dos y cuatro pisos, más un edificio de amenities</p>
                <p className="text-center fs-4">Sus unidades son amplias y luminosas, de 2 y 3 ambientes, con balcón con parrilla y cocheras cubiertas en planta baja. Los pisos superiores cuentan con terraza privada.</p>
                <p className="text-center fs-4">Un amplio corredor verde central, visuales 360º y seguridad 24hs completan la propuesta.</p>
            </div>

            <Carousel/>
            <Footer/>
            

        </>
    )
}

export default Departamentos