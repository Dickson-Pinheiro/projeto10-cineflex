import styled from "styled-components";
import Button from "../components/Button";
import FilmAndSession from "../components/FilmAndSession";
import Header from "../components/Header";
import SuccessCustomerData from "../components/SuccessCustomerData";
import SuccessTitle from "../components/SuccessTitle";
import Ticket from "../components/Ticket";
import { useNavigate } from "react-router-dom";

export default function PageSuccess({selectedSeats, hour, title, date, name, cpf, setTitle, setSelectedSeats, setDate, setName, setCpf, setDay, setHour }) {
    const navigate = useNavigate()
    function backHome(){
        setTitle("")
        setCpf("")
        setDate("")
        setHour("")
        setName("")
        setSelectedSeats([])
        setDay("")
        navigate("/")

    }


    return (
        <>
            <Header />
            <SuccessTitle />
            <Container>
                <FilmAndSession hour={hour} title={title} date={date}/>
                <Ticket selectedSeats={selectedSeats} />
                <SuccessCustomerData name={name} cpf={cpf}/>
            </Container>
            <Button clickFunction={backHome}>Voltar pra Home</Button>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`