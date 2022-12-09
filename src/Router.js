import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageFilmes from "./pages/PageFilmes"
import PageSeats from "./pages/PageSeats"
import PageTime from "./pages/PageTime"
import PageSuccess from "./pages/PageSuccess"
import { useState } from "react"

export default function Router() {

    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [title, setTitle] = useState("")
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [date, setDate] = useState("")


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageFilmes />} />
                <Route path="/sessoes/:filmId" element={<PageTime />} />
                <Route
                    path="/assentos/:idSessao"
                    element={
                        <PageSeats
                            selectedSeats={selectedSeats}
                            setSelectedSeats={setSelectedSeats}
                            name={name}
                            setName={setName}
                            cpf={cpf}
                            setCpf={setCpf}
                            title={title}
                            setTitle={setTitle}
                            day={day}
                            setDay={setDay}
                            hour={hour}
                            setHour={setHour}
                            setDate={setDate}
                        />
                    }
                />
                <Route
                    path="/sucesso"
                    element={
                        <PageSuccess
                            day={day}
                            hour={hour}
                            title={title}
                            selectedSeats={selectedSeats}
                            name={name}
                            cpf={cpf}
                            date={date}
                            setHour={setHour}
                            setDate={setDate}
                            setDay={setDay}
                            setTitle={setTitle}
                            setCpf={setCpf}
                            setName={setName}
                            setSelectedSeats={setSelectedSeats}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}