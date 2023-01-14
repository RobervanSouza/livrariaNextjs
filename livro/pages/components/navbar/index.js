import { NavStyled } from "./styled"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../images/Logo1.png"
export default function NavBar() {
    return (
        <>
            <NavStyled>
                <nav>
                    <div>
                        <Image src={Logo} width={48} />
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
