
import './App.css'
import Navbar from './components/navbar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/home'

const App=()=> {
  

  return (
    <>
      <Routes>
        <Route exact element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
