import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Seat from "./Seat"

export default function Seats() {
    const [seatsSession, setSeatsSession] = useState([])
    
    let {idSessao} = useParams()

    useEffect(() =>{
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        .then(response => {
            const {seats} = response.data
            setSeatsSession(seats)
        })
    }, [])


    return (
        <ContainerSeatsAndSubtitle>
            <ContainerSeats>
                 {seatsSession.map(s => <Seat number={s.name} key={s.id} isAVailable={s.isAvailable}/>)}
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