"use client"

import { useEffect, useState } from "react"

export default function Width () {
    const [width, setWidth] = useState(0)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return(
        <main>
            <h1 style = {{color: active ? "#680" : "#b00"}}>Sobre: {width}</h1>
            <button onClick={()=> setActive(!active)}> Ativar</button>
        </main>
    )
}