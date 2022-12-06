import styled from "styled-components";
import Film from "./Film";

export default function Films() {
    return (
        <ContainerMainFilms>
            <h2>Selecione o filme</h2>
            <ContainerFilms>
                <Film />
                <Film />
                <Film />
                <Film />
                <Film />
                <Film />
            </ContainerFilms>
        </ContainerMainFilms>
    )
}

const ContainerMainFilms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: #293845;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const ContainerFilms = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    width: 100%;
`