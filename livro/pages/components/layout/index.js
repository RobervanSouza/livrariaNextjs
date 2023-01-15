import Footer from "../footer";
import NavBar from "../navbar";
import React from "react";
export default function Layout({ children }) {
    return (
        <>

           <body>

            <NavBar/>
            
            
            <main> {children}</main>
           
            <Footer/>
           </body>
        
        </>
    )
}