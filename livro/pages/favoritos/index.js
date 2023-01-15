import React from "react";
import { contextBoks } from "../components/context/context";
export default function Favoritos() {

    const { favoritos, addFavoritos, removeFavoritos } = contextBoks();

    console.log("favoritos", favoritos)

    const checarFavoritos = (id) => {
        const boolean = favoritos.some((book) => book.id === id)
        return boolean;
    }


    return (
        <>
        <body>
            
                <div className="todos">

                    {favoritos.length >0 ?  favoritos.map((book) => (
                        <div key={book.id} className="livro" >

                            <div className="title" >{book.title} {book.name}</div>

                            <div className="images" ><img src={book.image_url}  alt="imagens livos" />
                
                            </div>

                            <div className="button-class"  >
                                {checarFavoritos(book.id) ? (
                                    <button className="button" onClick={() => removeFavoritos(book.id)} >Remover favoritos</button>
                                ) : (

                                    <button className="button" onClick={() => addFavoritos(book)} >Adiciona a favoritos</button>
                                )}
                            </div>

                        </div>
                    )): <h2>não tem favoritos</h2>}

                </div>
                <style jsx>{`
      :global(body) {
       font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
      }
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
    `}</style>
            </body>
        </>
    )
}
