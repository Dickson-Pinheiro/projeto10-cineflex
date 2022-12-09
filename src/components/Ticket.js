import styled from "styled-components"

export default function Ticket({selectedSeats}){
    return(
        <ContainerTicket data-test="seats-info">
            <h1>Ingressos</h1>
                {selectedSeats.map(s => <p key={s}>Assento {s}</p>)}
        </ContainerTicket>
    )
}

const ContainerTicket = styled.div`
    margin-left: 28px;
    h1 {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 4%;
        color: #293845;
    }
    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 4%;
    }
`