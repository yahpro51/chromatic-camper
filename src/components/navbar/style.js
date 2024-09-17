import styled from "styled-components"



export const Navbarcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
`
export const Navmid = styled.div`
flex: 3;
display: flex;
justify-content: space-evenly;
div{
    cursor: pointer;
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`
export const Navlogo = styled.div`
flex: 1;
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Navend = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`