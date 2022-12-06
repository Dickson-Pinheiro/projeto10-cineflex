import styled from "styled-components"
import filmImage from "../assets/film.png" 

export default function Film(){
    return(
        <ContainerFilm>
            <img src={filmImage} />
        </ContainerFilm>
    )
}

const ContainerFilm = styled.li`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 129px;
    }
`