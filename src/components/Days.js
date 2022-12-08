import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Day from "./Day";

export default function Days(){
    let [daysSession, setDaysSession] = useState([])

    let {filmId} = useParams()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmId}/showtimes`)
        .then(response => {
             let {days}= response.data
             setDaysSession(days)
        })
    }, [])

    return(
        <>
        {daysSession.map(day => <Day day={day} key={day.id}/>)}
        </>
    )
}