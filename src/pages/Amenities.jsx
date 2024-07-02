import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import FormHeader from "../components/FormHeader"
import arrowDown from "../assets/arrow.png"


const Amenities = () => {
  return (
    <>

      <div className="hero-bg amenities-hero">

        <div className="container d-flex align-items-center justify-content-center">
          <div className="titulo flex-column justify-content-center col-12 col-lg-6 gap-5">
            <h1>Tu lugar por naturaleza.</h1>
            <img className="hide" src={arrowDown} alt="arrowDown" />
          </div>

          <FormHeader />

        </div>

      </div>

      <div className="container my-5 px-5">
        <p className="text-center fs-4">Amenities premium integran la propuesta. El Complejo cuenta con pileta, dos Salones de Usos Múltiples (SUM), ROOFTOP, gimnasio y un espacio coworking.</p>
      </div>

      <Carousel/>
      <Footer/>

    </>
  )
}

export default Amenities