import styled from "styled-components"

export default function Header(){
    return(
        <ContainerHeader>
            <h1>CINEFLEX</h1>
        </ContainerHeader>
    )
}


const ContainerHeader = styled.header`
    position: fixed;
    top: 0;
    margin: 0;
    width: 100%;
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
`