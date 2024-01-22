
                                import { BrowserRouter, Routes, Route } from "react-router-dom";
                                import Home from '../pages/Home';
                                import Header from '../Components/Header/Header';
                                import Footer from '../Components/Footer/Footer'
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

                                    <Footer/>
                                    
                                  </div>
                                  )
                                }

                                export default App
