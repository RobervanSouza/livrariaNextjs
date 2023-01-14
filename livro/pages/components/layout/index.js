import Footer from "../footer"
import NavBar from "../navbar"
import { LayoutStyled } from "./styled"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
export default function Layout({ children }) {
    return (
        <>
        <LayoutStyled>
           <body>

            <NavBar/>
            <div className="button" >
            <button className="verde" id="bnt-verde" >Verde</button>
            <button className="laranja" id="bnt-laranja" >Laranja</button>
            <button className="azul" id="bnt-azul" >Azul</button>
            </div>
            <main> {children}</main>
            <script src="sript.js">
            
            </script>
            <Footer/>
           </body>
        </LayoutStyled>
        </>
    )
}