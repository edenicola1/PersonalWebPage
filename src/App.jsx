import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "../Components/Header.jsx"
import Body from "../Components/Body.jsx"
import Footer from "../Components/Footer.jsx"

function App() {

  return (
    <div id="container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
