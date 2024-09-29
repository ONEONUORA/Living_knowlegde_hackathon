
import './App.css'
import Navbar from './components/navbar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/home'
import NavbarTwin from './components/navbarTwin'
import TwinHome from './pages/twinHome'
import TwinHome2 from './pages/twinHome2'

const App=()=> {
  

  return (
    <>
      <Routes>
        <Route exact element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
        </Route>

        <Route exact element={<NavbarTwin/>}>
          <Route path='/twinHome' element={<TwinHome/>}/>
          <Route path='/twinHome2' element={<TwinHome2/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
