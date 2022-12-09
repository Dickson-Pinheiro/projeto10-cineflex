import axios from "axios"
import styled from "styled-components"
import Button from "./Button"
import { useNavigate } from "react-router-dom"



export default function CustomerData({name, setName, cpf, setCpf, selectedSeats}){
    const navigate = useNavigate()
    function submitCustomerData(e){
        e.preventDefault()
        if(selectedSeats.length === 0){
            alert("Selecione os lugares para realizar a reserva")
            return
        }

        const ticketData = {ids: selectedSeats, name, cpf}

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", ticketData)
        .then(res => {
            console.log(res)
            navigate("/sucesso")
        })
        .catch(err => console.log(err))


    }

    return(
        <DataCustomer onSubmit={submitCustomerData}>
            <label htmlFor="nome">
                <p>Nome do comprador:</p>
                <input id="nome" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..."/>
            </label>
            <label htmlFor="cpf">
                <p>CPF do comprador:</p>
                <input id="cpf" type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
            </label>
            <Button >Reservar Assento(s)</Button>
        </DataCustomer>
    )
}

const DataCustomer = styled.form`
    margin-top: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    input {
        width: 327px;
        height: 51px;
        background-color: #ffffff;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        margin-top: 5px;
        &::placeholder {
            padding-left: 18px;
            color: #AFAFAF;
            font-size: 18px;
            font-weight: 400;
            font-style: italic;
        }
    }
`