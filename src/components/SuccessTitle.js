import styled from "styled-components"

export default function SuccessTitle(){
    return (
        <ContainerTitleSuccess>
            <h1>Pedido feito com sucesso!</h1>
        </ContainerTitleSuccess>
    )
}

const ContainerTitleSuccess = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 72px;
    margin-bottom: 20px;
    h1 {
        width: 150px;
        text-align: center;
        word-wrap: break-word;
        color: #247A6B;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 4%;
        line-height: 28px;
    }
`