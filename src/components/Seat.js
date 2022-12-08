import styled from "styled-components"

export default function Seat({number, isAVailable}){
    return(
        <ContainerSeat isAVailable={isAVailable}>
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
    background-color: ${props => props.isAVailable ? "#C3CFD9": "#FBE192"};
    border: 1px solid ${props => props.isAVailable ? "#808F9D": "#F7C52B"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`