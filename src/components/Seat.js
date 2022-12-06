import styled from "styled-components"

export default function Seat({number}){
    return(
        <ContainerSeat>
            {number}
        </ContainerSeat>
    )
}

const ContainerSeat = styled.li`
    width: 26px;
    height: 26px;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 4%;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`