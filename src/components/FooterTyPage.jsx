import logoFooter from "../assets/logo-footer.png"
import rootLogoFooter from "../assets/root-logo-footer.png"
import arqLogoFooter from "../assets/arq-logo-footer.png"

const FooterTyPage = () => {
    return (
        <>

            <div className="container my-100">

                <div className="container d-flex justify-content-between align-items-center my-100">
                    <img src={logoFooter} alt="" />
                    <div className="logos">
                        <img src={rootLogoFooter} alt="" />
                        <img src={arqLogoFooter} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default FooterTyPage