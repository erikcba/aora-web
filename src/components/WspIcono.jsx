import wspIcono from "../assets/wspIcono.png"
import { Link } from "react-router-dom"


const WspIcono = () => {
  return (
    <>
      <Link to={'https://wa.me/15551234567'}>
        <img src={wspIcono} alt="" />
      </Link>
      

    </>
  )
}

export default WspIcono