
import React,{ useState, useEffect } from "react";
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
        <body>
            
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
                <style jsx>{`
      :global(body) {
       .todos{
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    
}
.livro{
    text-align: center;
    
    
}
.title{
    
    width: 300px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    color: red;
    
}
.button-class{
    padding: 10px;
    margin-block-end: 2rem;
}
.button{
    position: relative;
    padding: 10px;
    background-color: aqua;
    border-radius: 3rem;
    cursor: pointer;
}
.images{
    width: 100%;
    transition: all 0.3s ease;

}
.images:hover{
    transform: scale(1.03)
}

      }
    `}</style>
            
            </body>
        </>

    )
}
