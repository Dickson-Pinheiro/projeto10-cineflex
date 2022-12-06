import styled from "styled-components"
import Seat from "./Seat"

const seatsFilm = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]

export default function Seats() {
    return (
        <ContainerSeatsAndSubtitle>
            <ContainerSeats>
                {seatsFilm.map((n) => <Seat number={n} key={n} />)}
            </ContainerSeats>
        <Subtitles>
            <Subtitle backgroundColor="#1AAE9E" borderColor="#0E7D71">
                <div></div>
                <p>Selecionado</p>
            </Subtitle>
            <Subtitle backgroundColor="#C3CFD9" borderColor="#7B8B99">
                <div></div>
                <p>Disponível</p>
            </Subtitle>
            <Subtitle backgroundColor="#FBE192" borderColor="#F7C52B">
                <div></div>
                <p>Indisponível</p>
            </Subtitle>
        </Subtitles>
        </ContainerSeatsAndSubtitle>
    )
}

const ContainerSeats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 345px;
    gap: 7px;
    justify-content: center;
`

const Subtitles = styled.div`
    max-width: 345px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
`

const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-weight: 400;
    font-size: 13px;
    color: #4E5A65;
    gap: 8px;
    div {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: ${props => props.backgroundColor};
        border: 1px solid ${props => props.borderColor};
    }
`

const ContainerSeatsAndSubtitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -13px;
`