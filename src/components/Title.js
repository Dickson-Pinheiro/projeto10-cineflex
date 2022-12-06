import styled from "styled-components"

export default function Title({children}){
    return (
    <TitleContainer>{children}</TitleContainer>
    )
}

const TitleContainer = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
`