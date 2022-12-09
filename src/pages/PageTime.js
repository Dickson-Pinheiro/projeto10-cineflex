import { useState } from "react";
import styled from "styled-components";
import Days from "../components/Days";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";



export default function PageTime() {
    const [imageFilm, setImageFilm] = useState("")
    const [titleFilm, setTitleFilm] = useState("")

   

    return (
        <>
            <Header />
            <Title>Selecione o horário</Title>
            <ContainerDays>
                <Days setImageFilm={setImageFilm} setTitleFilm={setTitleFilm}/>
            </ContainerDays>
            <Footer image={imageFilm} title={titleFilm}/>
        </>
    )
}

const ContainerDays = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
`