import React from 'react'
import { Afterwall, Camping, Campinplacecon } from './style'
import Wallpapercomponent from './wallpaper'
import camping from "../../../assets/camping.svg"
import camping2 from "../../../assets/camping2.svg"
import camping3 from "../../../assets/camping3.svg"
import { Footercon } from '../motor/style'
import Footercomponent from '../motor/footer'

const Campingplacecomponent = () => {
  return (
<Campinplacecon>
  <Wallpapercomponent/>
  <Afterwall>
    <Camping>
      <img src={camping} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping2} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping3} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping2} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping3} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping2} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping3} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping2} alt="" />
      <div>Camping place name</div>
    </Camping>
    <Camping>
      <img src={camping3} alt="" />
      <div>Camping place name</div>
    </Camping>
  </Afterwall>
  <Footercomponent/>
</Campinplacecon>
  )
}

export default Campingplacecomponent
