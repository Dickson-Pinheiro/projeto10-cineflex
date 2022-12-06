import styled from "styled-components";
import Days from "../components/Days";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageTime() {
    return (
        <>
            <Header />
            <Title>Selecione um horário</Title>
            <ContainerDays>
                <Days />
                <Days />
                <Days />
            </ContainerDays>
            <Footer />
        </>
    )
}

const Title = styled.h2`
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: #293845;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
`

const ContainerDays = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
`