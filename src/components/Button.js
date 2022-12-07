import { Children } from "react";
import styled from "styled-components";

export default function Button({children}){
    return(
        <ContainerButton>
            <button>{children}</button>
        </ContainerButton>
    )
}

const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    button {
        width: 255px;
        height: 42px;
        background-color: #E8833A;
        font-size: 18px;
        font-weight: 400px;
        color: #ffffff;
        letter-spacing: 4%;
        line-height: 21px;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
`