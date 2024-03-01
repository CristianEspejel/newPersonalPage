 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Portafolio from '../pages/Portafolio'
import Contacto from "../pages/Contacto";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../Styles/App.css'

function App() {
                                  
      return (
              <div className="App">
                  <BrowserRouter>
                    <Header/>
                      <Routes>
                        <Route path = "/" element = {<Home/>}/>
                        <Route path="/portafolio" element = {<Portafolio/>}/>
                        <Route path="/contacto" element = {<Contacto/>}/>
                      </Routes>
                    <Footer/>  
                  </BrowserRouter>

                                    
             </div>
          )
        }

export default App
