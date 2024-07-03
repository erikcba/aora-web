import { useState } from "react"


const Carousel = ({ mobileImages, desktopImages }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const siguiente = () => {
        setCurrentIndex((currentIndex + 1) % Math.max(mobileImages.length, desktopImages.length))
    }

    const anterior = () => {
        setCurrentIndex((currentIndex - 1 + Math.max(mobileImages.length, desktopImages.length)) % Math.max(mobileImages.length, desktopImages.length))
    }


    return (
        <>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {mobileImages && mobileImages.map((img, index) => (
                        <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
                            <img
                                src={img}
                                alt={`Mobile Slide ${index}`}
                                className="w-100 img-mob"
                            />
                        </div>
                    ))}
                    {desktopImages && desktopImages.map((img, index) => (
                        <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
                            <img
                                src={img}
                                alt={`Desktop Slide ${index}`}
                                className="w-100 img-desk"
                            />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" onClick={anterior}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" onClick={siguiente}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carousel