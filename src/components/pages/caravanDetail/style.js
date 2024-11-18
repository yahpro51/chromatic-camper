import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FAFAFA;
gap: 50px;
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const WrapperPhoto = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const WrapperDetail = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 600px;
height: 360px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 12px 7px;
gap: 8px;
`
export const DetailNav = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
`

export const Detailnamecost = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

.name{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.cost{
    color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const Detailline = styled.div`
width: 560px;
height: 1px;
background-color: rgba(55, 55, 55, 0.30);
`
export const DetailtextWrapp = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
gap: 8px;
`

export const Detailtext = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
width: 70%;
.text1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.text2{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

export const Insidecar = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 70px;

`

export const Icimg = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
img{
    flex: 1;
    width: 700px;
    height: 500px;
}
`

export const Ictext = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
.text1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.text2{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
`

export const Hooder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
width: 100%;
`

export const HooderNav = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: 60px;
flex-shrink: 0;
width: 100%;
gap: 20px;
div{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const HooderHome1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
`
export const Home1Up = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
export const Home1Uptext = styled.div`
display: flex;
justify-content: center;
align-items: center;
.text1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.text2{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const Home1Down = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`

export const Home1DowncardWrapp = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
gap: 30px;
`
export const Home1Downcard = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
`
export const Home1Line= styled.div`
background: rgba(55, 55, 55, 0.15);
height: 1px;
width: 1366px;
`

export const DowncardLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
`
export const DowncardLefttexttwrapp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
.text1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.text2{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.text3{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const DowncardRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const DowncardRighttextwrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
.text1{color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;}
.text2{color: #373737;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;}
`
















export const TabPanel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`