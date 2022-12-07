import styled from "styled-components";
import Film from "./Film";

export default function Films() {
    return (
        <ContainerMainFilms>
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
`

const ContainerFilms = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    width: 100%;
`