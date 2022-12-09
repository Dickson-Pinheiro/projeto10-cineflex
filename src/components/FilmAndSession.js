import styled from "styled-components"

export default function FilmAndSession({date, hour, title}){
    return(
        <ContainerFilmAndSession data-test="movie-info">
            <h1>Filme e sessão</h1>
            <p>{title}</p>
            <p>{date} {hour}</p>
        </ContainerFilmAndSession>
    )
}

const ContainerFilmAndSession = styled.div`
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