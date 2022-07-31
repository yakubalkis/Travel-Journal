import React from "react";
import worldIcon from '../img/world-icon.png'
export default function Head(){
    return (
        <header className="header">
            <div className="header-component">
                <img src={worldIcon}/>
                <span>my travel journal.</span>
            </div>
        </header>
    )
}