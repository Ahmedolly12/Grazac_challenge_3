import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Nav from './Component/Nav/Nav'
 import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Routes>
        {/* <Route path ='/' element = {</>}/> */}
         
      </Routes>
     
      <Footer/>
    </div>
  )
}

export default App