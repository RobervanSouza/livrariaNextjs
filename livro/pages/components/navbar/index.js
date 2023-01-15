import { NavStyled } from "./styled"
import Link from "next/link"

export default function NavBar() {
    return (
        <>
            <NavStyled>
                <nav>
                    <div>                       
                        <h1>Carbono</h1>
                    </div>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href="/listaLivros">Lista de livros</Link>
                        </li>
                        <li>
                            <Link href='/favoritos'>Favoritos</Link>
                        </li>
                       
                    </ul>
                </nav>
            </NavStyled>
        </>
    )
}
