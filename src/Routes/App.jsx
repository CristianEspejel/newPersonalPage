 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Header from '../Components/Header/Header';

import '../Styles/App.css'

function App() {
                                  
      return (
              <div className="App">
                  <BrowserRouter>
                    <Header/>
                      <Routes>
                        <Route path = "/" element = {<Home/>}/>
                      </Routes>
                  </BrowserRouter>

                                    
             </div>
          )
        }

export default App
