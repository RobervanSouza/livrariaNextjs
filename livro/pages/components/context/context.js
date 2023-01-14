import { createContext, useState } from "react";

const ContexFavotiro = createContext(null)

const ContextProvider = ({children}) => {
        const [favoritos, setFavotiro] = useState([])
  
        const addFavoritos = () =>{

        }
        
        const removeFavoritos = (id) =>{


        }
        
    return(
        <ContexFavotiro.Provider value={{ favoritos, addFavoritos, removeFavoritos }}  > 
            {children}
        </ContexFavotiro.Provider>

    )
}