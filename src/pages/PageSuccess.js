import styled from "styled-components";
import Button from "../components/Button";
import FilmAndSession from "../components/FilmAndSession";
import Header from "../components/Header";
import SuccessCustomerData from "../components/SuccessCustomerData";
import SuccessTitle from "../components/SuccessTitle";
import Ticket from "../components/Ticket";

export default function PageSuccess() {
    const seats = ["15", "16", "17"]

    return (
        <>
            <Header />
            <SuccessTitle />
            <Container>
                <FilmAndSession hour="15:30" title="Enola Holmes" date="21/11/2021" />
                <Ticket seats={seats} />
                <SuccessCustomerData name="João da Silva Sauro" cpf="123.456.689-10"/>
            </Container>
            <Button>Voltar pra Home</Button>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`