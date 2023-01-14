import { SoluctionStyled } from "./styled"

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
            <SoluctionStyled>
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
            </SoluctionStyled>
        </>
    )
}
