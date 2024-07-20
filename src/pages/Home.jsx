import img1 from "../assets/AORABV-Slide22.png"
import img2 from "../assets/AORABV-Slide5.png"
import img3 from "../assets/AORABV-Slide10.png"
// import O from "../assets/favIcon.png"
import arrowDown from "../assets/arrow.png"

import Mapa from "../components/Mapa"
import Footer from "../components/Footer"
import FormHeader from "../components/FormHeader"


const Home = () => {
  return (
    <>
      <div className="hero-bg home-hero">

        <div className="container d-flex align-items-center justify-content-center">
          <div className="titulo flex-column justify-content-center col-12 col-lg-6 gap-5">
            <h1>Tu lugar por naturaleza.</h1>
            <img className="hide" src={arrowDown} alt="arrowDown" />
          </div>

          <FormHeader/>

        </div>

      </div>

      <div className="container-fluid d-flex flex-column gap-5 mt-5">

        <div className="row margin-auto align-items-center justify-content-center gap-4">
          <div className="col-12 col-lg-6">

            <img className="img-home" src={img1} alt="" />

          </div>
          <div className="col-12 col-lg-4">
            <p className="fs-4 fw-light">
              <b className="fw-bold">AORA Bella Vista</b> es un lugar único por sus características. Este desarrollo inmobiliario se ubica estratégicamente en la zona residencial de Bella Vista, contando con un fácil acceso, en un entorno seguro y tranquilo, en contacto con la naturaleza; disfrutando de todas las comodidades de la vida urbana.
            </p>
          </div>
        </div>

        <div className="row margin-auto align-items-center justify-content-center gap-4 reverse">
          <div className="col-12 col-lg-4">
            <p className="fs-4 fw-light">
              La integración con el entorno y la selección de las especies vegetales son un eje fundamental del proyecto. <b className="fw-bold">AORA Bella Vista</b> no es un edificio, es un estilo de vida, donde los amenities son parte de tu día a día y donde no necesitas escaparte el fin de semana porque hay verde todos los dias.
            </p>
          </div>
          <div className="col-12 col-lg-6">

            <img className="img-home" src={img2} alt="" />

          </div>
        </div>

        <div className="row margin-auto align-items-center justify-content-center gap-4">
          <div className="col-12 col-lg-6">

            <img className="img-home" src={img3} alt="" />

          </div>
          <div className="col-12 col-lg-4">
            <p className="fs-4 fw-light">
              <b className="fw-bold">AORA Bella Vista</b> cuenta con unidades amplias y luminosas, de 2 y 3 ambientes, balcón terraza con parrilla propia y cochera en planta baja cubiertas; complementadas con una propuesta comercial y oficinas.
            </p>
          </div>
        </div>

      </div>



      <div className="mapa-container mt-5">
        <Mapa />
      </div>
      <Footer />
    </>

  )
}

export default Home