"use client"
import { useState } from "react"

export default function IMC () {

    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [imc, setImc] = useState("")

    function  handleclick() {
        const transformHeightInMeter = Number(altura) / 100
        const imc = (Number(peso) / (transformHeightInMeter * transformHeightInMeter)).toFixed(2)
        setImc(imc)
    }
    return(
        <div>
            <label htmlFor="peso">Peso (Kg): {peso}</label>
            <input 
                type="text" 
                id="peso" 
                name= "peso"
                value={peso} 
                onChange={(e) => setPeso(e.target.value)}    
            />
            <label htmlFor="altura">Altura (cm): {altura}</label>
            <input 
                type="text" 
                id="altura" 
                name= "altura" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)}   
            />
            <button onClick={handleclick}>Calcular</button>
            <p>IMC: {imc}</p>
        </div>
    )
}