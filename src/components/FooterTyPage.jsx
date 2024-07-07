import logoFooter from "../assets/logo-footer.png"
import rootLogoFooter from "../assets/root-logo-footer.png"
import arqLogoFooter from "../assets/arq-logo-footer.png"

const FooterTyPage = () => {
    return (
        <>

            <div className="container my-100">
                <div className="row col-lg-12 justify-content-between align-items-center">
                    <div className="col-12 col-lg-2 mb-4">
                        <img src={logoFooter} alt="" />

                    </div>
                    <div className=" col-12 col-lg-6">
                        <div>
                            <img src={rootLogoFooter} alt="" />
                            <img src={arqLogoFooter} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FooterTyPage