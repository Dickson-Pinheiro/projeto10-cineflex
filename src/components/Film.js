import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Film({ filmImage, id }) {
    return (
        <Link to={`/sessoes/${id}`}>
            <ContainerFilm>
                <img src={filmImage} />
            </ContainerFilm>
        </Link>
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