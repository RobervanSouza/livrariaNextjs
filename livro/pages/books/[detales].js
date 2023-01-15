import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api_Url1 from "../api/detalhes/api";
 

export default function Detalhes() {

    const [ book, setBooks ] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${Api_Url1}/${id}`).then(res => {
            setBooks(res.data)
        }).catch((err) => console.log("erro aqui", err) );
    }, [ id ])
    return (
        <>
        <body>
            
            <div>
                <h2>{book?.title}</h2>
                <img src={book?.image_url} alt="erro imahem" />
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