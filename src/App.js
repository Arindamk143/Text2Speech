import React from 'react'
import Navbar from './components/Navbar'
import MainApp from './components/mainApp'
import { useState } from 'react'
import About from './components/About'


export default function App() {

  const [mode, setMode] = useState("dark")

  let toggleBar = function () {
    if (mode === "dark") {
      setMode("primary")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleBar={toggleBar}/>
      <MainApp/>
      <hr />
      <About/>
    </>
  )
}
