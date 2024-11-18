import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FAFAFA;
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