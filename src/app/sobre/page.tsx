import { Metadata } from "next"

// meta tags, descrição da pagina 
export const metadata: Metadata = {
    title: "Sobre",
    description: "Página sobre"
}
export default function SobrePage() {
    return(
        <main>
            <h2>Sobre</h2>
        </main>
    )
}