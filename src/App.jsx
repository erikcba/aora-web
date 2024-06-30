
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Departamentos from './pages/Departamentos'
import WspIcono from './components/WspIcono'
import Comercial from './pages/Comercial'
import Amenities from './pages/Amenities'
import Contacto from './pages/Contacto'
import TyPage from './pages/TyPage'


function App() {

  return (
    <>

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/departamentos' element={<Departamentos />} />
          <Route path='/comercial' element={<Comercial />} />
          <Route path='/amenities' element={<Amenities />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='typage' element={<TyPage/>}/>
        </Routes>
        <div className="wsp-icono">
          <WspIcono />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
