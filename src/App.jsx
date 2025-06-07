import './App.css'

import Home from './pages/home'
import "./pages/home.css"

import About from './pages/About'
import "./pages/About.css"

import Proyects from './pages/Proyects'
import "./pages/Proyects.css"

import CarruselTecnologias from './pages/Tecnologia'
import "./pages/Tecnologia.css"

import Menuvertical from './pages/menu-vertical'
import "./pages/Menu-vertical.css"

function App() {
  

  return (
    <>
    <div>
  <Menuvertical></Menuvertical>
    </div>
   
    <div className='App'>


      <div className='home-app'>
        <Home></Home>
        <About></About> 
        <CarruselTecnologias ></CarruselTecnologias>
        <Proyects></Proyects>
        
        
      </div>
      </div>
    </>
    
  )
}

export default App
