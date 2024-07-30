import { useNavigate } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"
import FooterTyPage from "../components/FooterTyPage"


const TyPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>

            <div className="hero-bg home-hero d-flex align-items-center">

                <div className="container">
                    <div className="container titulo d-flex flex-column align-items-center justify-content-center titulo2 gap-4">
                        <h1 className="text-center h1-mobile">¡Gracias!</h1>
                        <h1 className="text-center h1-mobile">Pronto nos comunicaremos con vos.</h1>
                        <button onClick={handleClick} className="button d-flex align-items-center justify-content-center gap-2 my-2" type="submit">
                            <p className="lh-lg m-0">Continuar</p>
                            <img src={rightArrow} alt="flecha-derecha" />
                        </button>
                    </div>



                </div>

            </div>

            <FooterTyPage/>

        </>
    )
}

export default TyPage