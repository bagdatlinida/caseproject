import React from 'react'
import Carousels from './Carousels'
import Footer from "./Footer"
import Header from "./Header"
import Games from "./Games"
import GridExampleRelaxed from "./GridExampleRelaxed"


function Base() {
    return (
        <div>
            <Header/>
            <Carousels/>
            <GridExampleRelaxed/>
            <br />
            <Footer />
            
        </div>
    )
}

export default Base
