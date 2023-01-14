import styled from "styled-components";

export const NavStyled = styled.div`


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
    color: red;
}
a{
    color: white;
    text-decoration: none;
    padding: 5px;
    transition: 0.4s;
    border-bottom: 2px solid transparent;

}
a:hover{
    border-color: red;
}
`;