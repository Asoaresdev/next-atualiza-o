import Link from "next/link";

export default function MenuComponente() {
  return (
    <ul className="menu">
        <li>
            <Link href="/" prefetch={true}>Home</Link>
        </li>
        <li>
            <Link href="/sobre" prefetch={true}>Sobre</Link>
        </li>
        <li>
            <Link href="/contato" prefetch={true}>Contato</Link>
        </li>
    </ul>
  )
}
