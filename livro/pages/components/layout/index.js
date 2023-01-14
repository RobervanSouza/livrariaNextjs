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
           
            <NavBar/>
           
            <main> {children}</main>
            <Footer/>
        </LayoutStyled>
        </>
    )
}