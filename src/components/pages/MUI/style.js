import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  position: center;
  top: '50%';
  left: '50%';
 transform: 'translate(-50%, -50%)';
  background-color: white;
  width: 850px;
height: 480px;
padding: 4;
flex-shrink: 0;
border-radius: 20px;
iframe{
    width: 600px;
    height: 380px;
}
`

export const Modalwp = styled.div`
display: flex;
justify-content: center;
align-items: center;
`