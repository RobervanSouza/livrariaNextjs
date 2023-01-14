import { AboutStyled } from "./styled";
import Carbon from "../images/Carbon.png";
import Image from "next/image";
import RickMArtin from "..";
export default function About() {
    return (
        <>
            <AboutStyled>
                <h1>Sobre Carbono</h1>
                <p>O carbono é um dos elementos mais abundantes no Universo e está presente na vida humana, como na constituição do nosso corpo e nos combustíveis que usamos.</p>
              <Image src={Carbon} width={300} height={200} />
              <RickMArtin/>
            </AboutStyled>
        </>
    )
}
