import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import FormHeader from "../components/FormHeader"

const Amenities = () => {
  return (
    <>

      <div className="hero-bg amenities-hero">

        <div className="container d-flex align-items-center justify-content-center">
          <div className="titulo col-6">
            <h1>Tu lugar por naturaleza.</h1>
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