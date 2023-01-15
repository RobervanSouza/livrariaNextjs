import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api_Url1 from "../api/detalhes/api";
import { DetalhesStyled } from "./syled"; 

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
            <DetalhesStyled>
            <div>
                <h2>{book?.title}</h2>
                <img src={book?.image_url} alt="erro imahem" />
            </div>
            </DetalhesStyled>
        </>
    )
}