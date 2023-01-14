import styled from "styled-components";

export const AboutStyled = styled.div`
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

`;