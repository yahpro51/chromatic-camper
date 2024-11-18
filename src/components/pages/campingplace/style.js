import styled from "styled-components";
import campingwall from "../../../assets/campingplacewallpaper.svg"

export const Campinplacecon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 70px;
`

export const Wallcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${campingwall});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 600px;
gap: 70px;
`

export const Afterwall = styled.div`
display: grid;
grid-template-areas: 'a a a';
justify-content: center;
align-items: center;
gap: 20px;
`

export const Camping = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;

div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
img{
    border-radius: 20px;
}
`

