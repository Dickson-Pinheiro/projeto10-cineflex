import styled from "styled-components"

export default function Time(){
    return(
        <ContainerTime>
            15:30
        </ContainerTime>
    )
}

const ContainerTime = styled.li`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.02em;
    cursor: pointer;
`