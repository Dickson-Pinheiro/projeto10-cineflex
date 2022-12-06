import Time from "./Time"
import DateFilm from "./DateFilm"
import styled from "styled-components"

const horarioDosFilmes = [1, 2, 3, 4, 5]

export default function Days() {
    return (
        <ContainerTimeDays>
            <Container>
                <DateFilm />
                <ContainerTimeFilm>
                    {horarioDosFilmes.map(film => <Time key={film} />)}
                </ContainerTimeFilm>
            </Container>
        </ContainerTimeDays>
    )
}

const ContainerTimeDays = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerTimeFilm = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 22px;
`

const Container = styled.div`
    margin-left: 24px;
`