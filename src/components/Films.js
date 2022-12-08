import { useEffect, useState } from "react";
import styled from "styled-components";
import Film from "./Film";
import axios from "axios"

export default function Films() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        .then(response => {
           let {data} = response
           let filmResponse = data.map(f => {return {posterURL: f.posterURL, id: f.id}})
           setFilms(filmResponse)
        })
    }, [])


    return (
        <ContainerMainFilms>
            <ContainerFilms>
                {films.map(f => <Film key={f.id} id={f.id} filmImage={f.posterURL}/>)}
            </ContainerFilms>
        </ContainerMainFilms>
    )
}

const ContainerMainFilms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 97px;
    margin-bottom: 40px;
`

const ContainerFilms = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    width: 100%;
    max-width: 350px;
`