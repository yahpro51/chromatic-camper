import React from 'react'
import { Container, Detailline, Detailnamecost, DetailNav, Detailtext, DetailtextWrapp, Hooder, HooderNav, Icimg, Ictext, Insidecar, Wrapper, WrapperDetail, WrapperPhoto,} from './style'
import { useParams } from 'react-router-dom'
import { caravans } from '../caravan/mock'
import Wallcomponent from './wallcon'
import img1 from "./assets/camperin1.svg"
import img2 from "./assets/camperin2.svg"
import img3 from "./assets/camperin3.svg"
import img4 from "./assets/camperin4.svg"
import img5 from "./assets/camperin5.svg"
import FullWidthTabs from './Hoodernav'









const CaravanDetail = () => {
  let {id} = useParams();
  const dataById = caravans.find((data)=> data.id === parseInt(id))

  return (
    
<Container>
  <Wallcomponent/>
  <Wrapper>
    <WrapperPhoto><img src={dataById.car.photo} alt="" style={{width:"600px", height:"380px"}}/></WrapperPhoto>
    
    <WrapperDetail>
      <DetailNav>
<Detailnamecost>
  <div className='name'>{dataById.car.name}</div>
  <div className='cost'>{dataById.car.cost_krw}</div>
</Detailnamecost>
<Detailline></Detailline>
</DetailNav>
<DetailtextWrapp>
<Detailtext>
  <div className='text1'>Company</div>
  <div className='text2'>{dataById.car.company}</div>
</Detailtext>
<Detailtext>
  <div className='text1'>Number of People</div>
  <div className='text2'>{dataById.car.number_of_people}</div>
</Detailtext>
<Detailtext>
  <div className='text1'>Lycense Type</div>
  <div className='text2'>{dataById.car.license_type}</div>
</Detailtext>
</DetailtextWrapp>
    </WrapperDetail>
    </Wrapper>
    <Insidecar>
    
    
   <Ictext>
      <div className='text1'>Comfort</div>
      <div className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br /> nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, <br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br /> Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br /> sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin <br /> iaculis mi.</div>
    </Ictext>
     <Icimg><img src={img1} alt="" /></Icimg>
  </Insidecar>
    <Insidecar>
    <Icimg><img src={img2} alt="" /></Icimg>
    <Ictext>
      <div className='text1'>Tidying away is child's play!</div>
      <div className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br /> nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, <br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br /> Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br /> sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin <br /> iaculis mi.</div>
    </Ictext>
  </Insidecar>
  <Insidecar>
    <Ictext>
      <div className='text1'>Ventilated , Lit up</div>
      <div className='text2'>In our vans and motorhomes, all our body lighting is 100% LED: a <br /> guarantee of energy efficiency and durability. <br />
As for ventilation, we also often offer double ventilation in the <br /> bathroom (Skylight + window), which is very popular with our <br /> customers… <br />
Camper relies on legendary Seitz windows. They offer the best <br /> insulation and are also the easiest to use and safest because they <br /> can't be removed from the outside.													</div>
    </Ictext>
    <Icimg><img src={img3} alt="" /></Icimg>
  </Insidecar>
  <Insidecar>
    <Icimg><img src={img4} alt="" /></Icimg>
    <Ictext>
      <div className='text1'>Easy access</div>
      <div className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br /> nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, <br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br /> Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br /> sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin <br /> iaculis mi.</div>
    </Ictext>
  </Insidecar>
  <Insidecar>
   <Ictext>
      <div className='text1'>Heating when driving</div>
      <div className='text2'>Fuel heating is now very popular in the industry, but this was not <br /> always the case; Camper (once again) led the way in this area over <br /> 15 years ago. <br />
      One of the advantages it offers is that it can heat up your vehicle <br /> while you drive, for a more comfortable arrival.</div>
    </Ictext>
     <Icimg><img src={img5} alt="" /></Icimg>
  </Insidecar>
  <Hooder>
<HooderNav>
<FullWidthTabs/>
</HooderNav>

  </Hooder>
</Container>
  )
}

export default CaravanDetail
