import { useState } from "react"
import styled from "styled-components"

export default function Seat({ number, isAVailable, selectedSeats, setSelectedSeats }) {

    const [isSelected, setIsSelected] = useState(false)

    function bookSeat(n) {
        if (!isAVailable) {
            return
        }

        if (isSelected) {
            let newSelectedSeats = selectedSeats.filter(num => num !== n)
            setIsSelected(!isSelected)
            setSelectedSeats([...newSelectedSeats])
            return
        }

        setSelectedSeats([...selectedSeats, n])
        setIsSelected(!isSelected)
    }

    return (
        <ContainerSeat data-test="seat" isAVailable={isAVailable} isSelected={isSelected} onClick={() => bookSeat(number)}>
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
    background-color: ${props => {
        if (!props.isAVailable) {
            return "#FBE192"
        }
        if (props.isSelected) {
            return "#1AAE9E;"
        }
        return "#C3CFD9"
    }
    };
    border: 1px solid ${props => {
        if (!props.isAVailable) {
            return "#F7C52B"
        }
        if (props.isSelected) {
            return "#0E7D71"
        }
        return "#7B8B99"
    }
    };;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`