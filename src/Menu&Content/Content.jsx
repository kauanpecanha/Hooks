import React from "react";
import './Content.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import useState from '../Pages/useState'
import Dia11 from '../Pages/Dia11'
import Dia2 from '../Pages/Dia2'
import Dia21 from '../Pages/Dia21'
import Dia3 from '../Pages/Dia3'
import Dia31 from '../Pages/Dia31'

export default function Content(){
    return(
        <main className="Content">
            <Routes>
                <Route path = "/" exact element = {<Home />}/>
                <Route path = "/useState" element = {<useState />}/>

                <Route path = "/dia11" element = {<Dia11 />}/>

                <Route path = "/dia2" element = {<Dia2 />}/>

                <Route path = "/dia21" element = {<Dia21 />}/>
            </Routes>            
        </main>
    )
}