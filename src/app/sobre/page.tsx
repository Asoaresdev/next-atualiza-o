// import Width from "@/components/width"
import ClientFetch from "@/components/clientFetch"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// meta tags, descrição da pagina 
export const metadata: Metadata = {
    title: "Sobre",
    description: "Página sobre"
}
//carregar somente no cliente, não é pre-renderizado no servidor. assim acessa código client dinamicamente já passando pela função do useeffect no arquivo width, sem carregar o zero inicialemnte e depois o valor da tela. carrega diretamente o valor
const Width= dynamic(() => import ("@/components/width"), {ssr:false})

export default function SobrePage() {
    return(
        <main>
            <h2>Sobre</h2>
            <Width /> 
            <ClientFetch />  
        </main>
    )
}