
import Link from "next/link"
import React from "react"

export default function NavBar() {
    return (
        <>
            
                <nav>
                    <div>                       
                        <h1>Carbono</h1>
                    </div>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href="/listaLivros">Lista de livros</Link>
                        </li>
                        <li>
                            <Link href='/favoritos'>Favoritos</Link>
                        </li>
                       
                    </ul>
                <style jsx>{`
      :global(nav) {
       font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
      }
      
nav div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    
    
}
nav div h1{
    margin-left: .5rem;
}
nav{
display: flex;
justify-content: space-between;
align-items: center;
padding: 1em 1.2em;
margin-bottom: 2em;
background-color: #00AEA4;
color: white;
}
ul{
    display: flex;
    list-style: none;
    color: red;

}
li {
    margin-right: 1em;

    color: white;
    text-decoration: none;
    padding: 5px;
    transition: 0.4s;
    border-bottom: 2px solid transparent;

}
li:hover{
    border-color: red;
}
    `}</style>

                </nav>
            
        </>
    )
}
