import React from "react";
import './Menu.css'

export default function Menu(){
    return(
        <aside className="Menu">
            <nav>
                <ul className="list">
                    <li className = "element"><a href = "/">Início</a></li>
                    <li className = "element"><a href = "/useState">UseState()</a></li>
                    <li className = "element"><a href = "/dia11">UseEffect()</a></li>
                    <li className = "element"><a href = "/dia2">useRef()</a></li>
                    <li className = "element"><a href = "/dia21">useMemo()</a></li>
                    <li className = "element"><a href = "/dia3">useCallback()</a></li>
                    <li className = "element"><a href = "/dia31">useContext()</a></li>
                    <li className = "element"><a href = "/dia4">useReducer()</a></li>
                    <li className = "element"><a href = "/dia6">useMyHook()</a></li>
                </ul>
            </nav>
        </aside>
    )
}