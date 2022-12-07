import Header from "../components/Header";
import Seats from "../components/Seats";
import Title from "../components/Title";
import CustomerData from "../components/CustomerData";
import Button from "../components/Button";
import Footer from "../components/Footer";

import filmImage from "../assets/film.png"

export default function PageSeats() {
    return (
        <>
            <Header />
            <Title>Selecione o(s) assento(s)</Title>
            <Seats />
            <CustomerData />
            <Button >Reservar Assento(s)</Button>
            <Footer date="Sexta-feira - 15:00" image={filmImage} title="Enola Holmes"/>
        </>
    )
}