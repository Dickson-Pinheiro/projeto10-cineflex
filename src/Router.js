import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageFilmes from "./pages/PageFilmes"
import PageSeats from "./pages/PageSeats"
import PageTime from "./pages/PageTime"
import PageSuccess from "./pages/PageSuccess"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageFilmes />}/>
                <Route path="/sessoes/:filmId" element={<PageTime />}/>
                <Route path="/assentos/:idSessao" element={<PageSeats />}/>
                <Route path="/sucesso/" element={<PageSuccess />}/>
            </Routes>
        </BrowserRouter>
    )
}