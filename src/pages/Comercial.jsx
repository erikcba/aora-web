import FormHeader from "../components/FormHeader"
import img1 from "../assets/com-img-desc.png"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import arrowDown from "../assets/arrow.png"



const Comercial = () => {
  return (
    <>

      <div className="hero-bg comercial-hero">

        <div className="container d-flex align-items-center justify-content-center">
          <div className="titulo flex-column justify-content-center col-12 col-lg-6 gap-5">
            <h1>Tu lugar por naturaleza.</h1>
            <img className="hide" src={arrowDown} alt="arrowDown" />
          </div>

          <FormHeader />

        </div>

      </div>

      <div className="container-fluid  my-5">
        <div className="row align-items-center justify-content-center gap-4">
          <div className="col-12 col-lg-6">

            <img className="img-home" src={img1} alt="" />

          </div>
          <div className="col-12 col-lg-4">
            <p className="fs-4 fw-light">
              <b className="fw-bold">AORA Bella Vista</b> cuenta con un sector comercial emplazado en el frente del desarrollo, que permite tener todo muy cerca, a través de locales comerciales de proximidad y oficinas.
            </p>

            <p className="fs-4 fw-light">
              Los edificios comerciales incluyen 13 locales con un sector apto gastronomía, amplios estacionamientos y un total de 18 oficinas.
            </p>
          </div>
        </div>

      </div>

      <Carousel />
      <Footer />

    </>
  )
}

export default Comercial