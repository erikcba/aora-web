import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import FormHeader from "../components/FormHeader"
import arrowDown from "../assets/arrow.png"

import img1 from "../assets/Carousel-imgs/ameni-01-desk.png"
import img2 from "../assets/Carousel-imgs/ameni-02-desk.png"
import img3 from "../assets/Carousel-imgs/ameni-03-desk.png"
import img4 from "../assets/Carousel-imgs/ameni-04-desk.png"
import img1mob from "../assets/Carousel-imgs/ameni-01-mob.png"
import img2mob from "../assets/Carousel-imgs/ameni-02-mob.png"
import img3mob from "../assets/Carousel-imgs/ameni-03-mob.png"
import img4mob from "../assets/Carousel-imgs/ameni-04-mob.png"


const Amenities = () => {

  const imgDesk = [img1, img2, img3, img4]
  const imgMob = [img1mob, img2mob, img3mob, img4mob]

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

      <Carousel desktopImages={imgDesk} mobileImages={imgMob}/>
      <Footer/>

    </>
  )
}

export default Amenities