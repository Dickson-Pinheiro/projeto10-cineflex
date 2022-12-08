import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Time({ hour, id }) {
    return (
        <ContainerTime>
            <Link to={`/assentos/${id}`}>
                {hour}
            </Link>
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
    
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.02em;
    a {
        text-decoration: none;
        color: #ffffff;
        width: 83px;
        height: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    cursor: pointer;
`