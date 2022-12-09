import styled from "styled-components"

import Time from "./Time"
import DateFilm from "./DateFilm"

export default function Day({day}) {
    const {weekday, date, showtimes} = day
    return (
        <ContainerTimeDays data-test="movie-day">
            <Container>
                <DateFilm date={date} day={weekday}/>
                <ContainerTimeFilm >
                     {showtimes.map(t => <Time hour={t.name} key={t.id} id={t.id}/>)}
                </ContainerTimeFilm>
            </Container>
        </ContainerTimeDays>
    )
}

const ContainerTimeDays = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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