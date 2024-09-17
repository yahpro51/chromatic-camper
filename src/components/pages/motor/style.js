import styled from "styled-components";
import motorwall from "../../../assets/motorwall.png"

export const Motorcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
export const Wallcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${motorwall});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 500px;
`
export const Pp = styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const H3= styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const H1 = styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
`


export const Shopcon = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;
padding: 60px 70px;
`
export const Filtercon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
gap:50px ;
`
export const Filterminicon = styled.div`
display: flex;
flex-direction: column;

gap:30px ;
`

export const Filtertextline = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
`
export const Filtertext1 = styled.div`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
`
export const Filterline = styled.div`
width: 240px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
`
export const Fromto = styled.div`
display: flex;
align-items:baseline;
gap: 20px;
`
export const From = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
input{
    width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
}
`
export const Fromto2 = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:baseline;
gap: 10px;
`
export const From2 = styled.div`
display: flex;
justify-content: center;
gap: 10px;
div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
input{
    width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}
`
export const Filtertext2 = styled.div`
color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
`
export const Filterbtns = styled.div`
display: flex;
align-items: center;
gap:8px ;
button{
    width: 115.804px;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: white;
border: none;
cursor: pointer;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const Filtercompare = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;

`
export const Comparetext = styled.div`
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Compareend = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: end;
`
export const Comparemid = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
div{
display:flex ;
justify-content: center;
align-items: center;
width: 76px;
height: 90px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
}
`
export const Comparebtn = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;

button{
     color: white;
     border:none;
     width: 115.804px;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
background: var(--blue, #006DAB);
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
`











export const Datacon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 37px;
width: 100%;
height: 100%;
`
export const Datanavwrapp = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 5px;
`
export const Datanav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
export const Dataline = styled.div`
width: 100%;
height: 1px;
background: rgba(55, 55, 55, 0.50);
`
export const Datanavleft = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
`
export const Datanavright = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
`
export const Datarightcon1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
export const Rightcon1text = styled.div`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
`
export const Rightcon1input = styled.div`
display: flex;
justify-content: center;
input{
    padding: 8px 10px;
    width: 197px;
height: 30px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
height: 30px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`
export const Datarightcon2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
export const Rightcon2input = styled.div`
display: flex;
justify-content: center;
input{
    padding: 8px 10px;
    width: 50px;
height: 30px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
height: 30px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
.grid{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
height: 30px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`
export const Datawrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Cardwrapp = styled.div`
display: grid;
grid-template-areas: 'a a a a';
justify-content: center;
align-items: center;
gap: 20px;

`
export const Card = styled.div`
display: flex;
gap: 18px;
width: 223px;
height: 307px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`
export const Cardup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1px;
`
export const Uptext = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
.bigtext{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.smalltextwrapp{
    display: flex;
    justify-content: space-between;
}
.brandname{
    display: flex;
    align-items: start;
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.star-rate{
    display: flex;
    justify-content: center;
    align-items: center;
}
.star-rate div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`


export const Carddown = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap:13px ;
`
export const DownPrice = styled.div`
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Cardbtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
button{
    width: 94px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
background-color: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const Footercon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: var(--blue, #006DAB);
width: 100%;
height: 350px;
flex-shrink: 0;
padding: 56px 70px ;
`
export const Footerlogo = styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;


`
export const Footermenus = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 40px;
`
export const Footermenustext = styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Footermenusinfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 9px;
.footerimg{
    display: flex;
    justify-content: center;
    gap: 12px;
}
div{
    color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`