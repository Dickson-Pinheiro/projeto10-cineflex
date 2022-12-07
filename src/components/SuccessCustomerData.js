import styled from "styled-components"

export default function SuccessCustomerData({name, cpf}){
    return(
        <ContainerSuccessCustomerData>
            <h1>Comprador</h1>
            <p>Nome: {name}</p>
            <p>CPF: {cpf}</p>
        </ContainerSuccessCustomerData>
    )
}

const ContainerSuccessCustomerData = styled.div`
    margin-left: 28px;
    h1 {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 4%;
        color: #293845;
    }
    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 4%;
    }
`