import React from 'react'
import { Footercon, Footerlogo, Footermenus, Footermenusinfo, Footermenustext } from './style'
import footeryt from "../../../assets/cib_youtube.svg"
import footerinsta from "../../../assets/insta.svg"
import footernaver from "../../../assets/simple-icons_naver.svg"

const Footercomponent = () => {
  return (
<Footercon>
<Footerlogo>Camper</Footerlogo>
<Footermenus>
<Footermenustext>Services</Footermenustext>
<Footermenusinfo>
    <div>Camping</div>
    <div>Lodging</div>
    <div>Harbor</div>
    <div>Day Use</div>
</Footermenusinfo>
</Footermenus>
<Footermenus>
<Footermenustext>Menu</Footermenustext>
<Footermenusinfo>
    <div>About</div>
    <div>Services</div>
    <div>Booking</div>
    <div>Blog</div>
</Footermenusinfo>
</Footermenus>
<Footermenus>
<Footermenustext>Menu</Footermenustext>
<Footermenusinfo>
    <div className='footerimg'><img src={footeryt} alt="" /><img src={footerinsta} alt="" /><img src={footernaver} alt="" /></div>
    <div>Services</div>
    <div>Booking</div>
    <div>Blog</div>
</Footermenusinfo>
</Footermenus>
</Footercon>
  )
}

export default Footercomponent
