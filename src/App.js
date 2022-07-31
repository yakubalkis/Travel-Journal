import React from "react";
import Header from './components/header'
import Main from './components/main'
import Data from '../src/Data'

export default function App(){
    const cards = Data.map((item) => {
        console.log(item)
        return <Main 
                    key={item.id}
                    {...item}
        />
    })

    return(
        <div className="container">
            <Header/>
            <main>
                {cards }
            </main>
        </div>
    )
}