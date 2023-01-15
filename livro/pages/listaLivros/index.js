import { AboutStyled } from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import Api_Url from "../api/Api";
import { contextBoks } from "../components/context/context";
import Link from "next/link";

export default function About() {

    const [ books, setBooks ] = useState([])

    const  { favoritos, addFavoritos, removeFavoritos } = contextBoks ();

    console.log("favoritos", favoritos)

    const checarFavoritos = (id) => {
        const boolean = favoritos.some((book) => book.id === id)
         return boolean;
    }

    const favoritesPage =()=>{

    }

    useEffect(() => {
        try {
            axios.get("https://example-data.draftbit.com/properties?_limit=50").then(res => {
                console.log(res.data);
                setBooks(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <>
            <AboutStyled>
                <div className="todos" >
                    {books.map((book) => (
                        <div key={book.id} className="livro" >

                            <div className="title" >{book.name}</div>

                            <div className="images" >
                            <Link href={`/detalhes/${book.id}`} ><img src={book.image_url} alt="imagens livos" /></Link>
                            </div>
                            <div className="button-class"  >
                                {checarFavoritos(book.id) ? (
                                 <button className="button" onClick={() => removeFavoritos(book)} >Remover favoritos</button> 
                                ):(

                                <button className="button" onClick={() => addFavoritos(book)} >Adiciona a favoritos</button> 
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </AboutStyled>
        </>

    )
}
