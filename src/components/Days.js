import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Day from "./Day";

export default function Days({setImageFilm, setTitleFilm}){
    let [daysSession, setDaysSession] = useState([])

    let {filmId} = useParams()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmId}/showtimes`)
        .then(response => {
             let {days, posterURL, title}= response.data
             setDaysSession(days)
             setImageFilm(posterURL)
             setTitleFilm(title)
        })
    }, [])

    return(
        <Container>
        {daysSession.map(day => <Day day={day} key={day.id}/>)}
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 70px;
`