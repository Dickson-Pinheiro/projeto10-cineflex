import styled from "styled-components";
import Days from "../components/Days";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

export default function PageTime() {
    return (
        <>
            <Header />
            <Title>Selecione o horário</Title>
            <ContainerDays>
                <Days />
                <Days />
                <Days />
            </ContainerDays>
            <Footer />
        </>
    )
}

const ContainerDays = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
`