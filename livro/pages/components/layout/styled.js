import styled from "styled-components";

export const LayoutStyled = styled.h1`
main{
    min-height: 70vh;
}

div.button {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-block-end: 3rem;
}

.laranja{
    background-color: rgb(243, 173, 43);
    transition: all 0.25s ease-in-out;
}
.verde{
     background-color: rgb(1, 173, 43);
    transition: all 0.25s ease-in-out;
}
.azul{
   background-color: rgb(0, 0, 255);
    transition: all 0.25s ease-in-out;
}

`;
