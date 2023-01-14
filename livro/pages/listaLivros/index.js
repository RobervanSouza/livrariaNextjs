import { AboutStyled } from "./styled";
import Carbon from "../images/Carbon.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Api_Url from "../api/Api";

export default function About() {

    const [ books, setBooks ] = useState([])

    useEffect(() => {
        try {
            axios.get(Api_Url).then(res => {
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
                            <div className="title" >{book.title}</div>
                            <div className="images" ><img src={book.image_url } alt="imagens livos"  /></div>
                            <div className="button-class" > <button className="button" >Adiciona a favoritos</button> </div>
                        </div>
                    ))}
                </div>
            </AboutStyled>
        </>
    )
}
