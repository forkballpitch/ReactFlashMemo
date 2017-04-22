import React from "react"
import {render} from "react-dom"
import Footer from '/componenets/Footer'
import Navbar from '/componenets/Navbar'
import FlashCard from '/componenets/FlashCard'

render(
    <div>
      <Navbar/>
      <FlashCard />
      <Footer/>
    </div>
    .document.getElementById("app")
)
