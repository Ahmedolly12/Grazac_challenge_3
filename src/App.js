import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Nav from './Component/Nav/Nav'
import Product from './Pages/Product/Product'
//  import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App