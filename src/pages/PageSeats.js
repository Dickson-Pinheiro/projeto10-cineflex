import Header from "../components/Header";
import Seats from "../components/Seats";
import Title from "../components/Title";
import CustomerData from "../components/CustomerData";

export default function PageSeats() {
    return (
        <>
            <Header />
            <Title>Selecione o(s) acento(s)</Title>
            <Seats />
            <CustomerData />
        </>
    )
}