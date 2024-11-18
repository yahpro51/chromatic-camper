import React from 'react'
import { Container, Detailline, Detailnamecost, DetailNav, Detailtext, DetailtextWrapp, Wrapper, WrapperDetail, WrapperPhoto,} from './style'
import { useParams } from 'react-router-dom'
import Wallcomponent from './wallpaper'
import { tuning } from '../mock'


const TuningDetail = () => {
  let {id} = useParams();
  const dataByIdm = tuning.find((data)=> data.id === parseInt(id))
  console.log(dataByIdm)
  return (
    
<Container>
  <Wallcomponent/>
  <Wrapper>
    <WrapperPhoto></WrapperPhoto>
    
    <WrapperDetail>
      <DetailNav>
<Detailnamecost>
  <div className='name'>{dataByIdm.car.name}</div>
  <div className='cost'>{dataByIdm.car.cost_krw}</div>
</Detailnamecost>
<Detailline></Detailline>
</DetailNav>
<DetailtextWrapp>
<Detailtext>
  <div className='text1'>Company</div>
  <div className='text2'>{dataByIdm.car.company}</div>
</Detailtext>
<Detailtext>
  <div className='text1'>Number of People</div>
  <div className='text2'>{dataByIdm.car.number_of_people}</div>
</Detailtext>
<Detailtext>
  <div className='text1'>Lycense Type</div>
  <div className='text2'>{dataByIdm.car.license_type}</div>
</Detailtext>
</DetailtextWrapp>
    </WrapperDetail>
    </Wrapper>
</Container>
  )
}

export default TuningDetail