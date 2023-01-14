import { createContext, useState, useContext } from "react";

const ContexFavotiro = createContext(null)

export const contextBoks = () => {
    const context = useContext(ContexFavotiro);

    if (context === undefined) {
        throw new Error('erro no contexto')
    }

    return context;
};

const ContextProvider = ({ children }) => {
    const [ favoritos, setFavotiro ] = useState([])

    const addFavoritos = (book) => {      
     const bookFavorito = [ ... favoritos];

     const newFavoritos = bookFavorito.concat(book)

     setFavotiro(newFavoritos);

    }

    const removeFavoritos = (id) => {
    const oldFavoritos = [... favoritos];

    const newFavoritos = oldFavoritos.filter((book) => book.id !== id);

    setFavotiro(newFavoritos);
    }

    return (
        <ContexFavotiro.Provider value={{ favoritos, addFavoritos, removeFavoritos }}  >
            {children}
        </ContexFavotiro.Provider>

    )
}
export default ContextProvider;