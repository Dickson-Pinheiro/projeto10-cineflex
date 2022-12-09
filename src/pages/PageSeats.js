import Header from "../components/Header";
import Seats from "../components/Seats";
import Title from "../components/Title";
import CustomerData from "../components/CustomerData";
import Footer from "../components/Footer";

import { useState } from "react";

export default function PageSeats({selectedSeats, setSelectedSeats, name, setName, cpf, setCpf, title, setTitle, day, setDay, hour, setHour, setDate}) {

    const [image, setImage] = useState("")
    

    return (
        <>
            <Header />
            <Title>Selecione o(s) assento(s)</Title>
            <Seats
                setDay={setDay}
                setHour={setHour}
                setImage={setImage}
                setTitle={setTitle}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                setDate={setDate}
            />
            <CustomerData 
                name={name}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}
                selectedSeats = {selectedSeats}
            />
            <Footer date={`${day} - ${hour}`} image={image} title={title} />
        </>
    )
}