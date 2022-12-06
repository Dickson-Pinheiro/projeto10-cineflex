import styled from "styled-components"

export default function CustomerData(){
    return(
        <DataCustomer>
            <label>
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..."/>
            </label>
            <label>
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..."/>
            </label>
        </DataCustomer>
    )
}

const DataCustomer = styled.div`
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