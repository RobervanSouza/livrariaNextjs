import { createContext, useState } from "react";

const ContexFavotiro = createContext(null)

const ContextProvider = ({children}) => {
        const [favorito, setFavotiro] = useState([])
  

}