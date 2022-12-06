import styled from "styled-components"
import filmImage from "../assets/film.png"

export default function Footer() {
    return (
        <ContainerFooter>
            <ContainerFilm>
                <img src={filmImage} />
            </ContainerFilm>
            <h3>Enola Homes</h3>

        </ContainerFooter >
    )
}

const ContainerFilm = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    img {
        width: 48px;
    }
`

const ContainerFooter = styled.footer`
    width: 100%;
    height: 117px;
    margin-top: 18px;
    display: flex;
    align-items: center;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
    gap: 22px;

    h3 {
        font-size: 26px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: #293845;
    }
`