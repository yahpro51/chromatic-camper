import React from 'react'
import { Motorcon } from './style'
import Wallappercomponent from './wallapper'
import Shopcomponent from './shop'
import Footercomponent from './footer'

const Motorcomponent = () => {
  return (
<Motorcon>
  <Wallappercomponent/>
  <Shopcomponent/>
  <Footercomponent/>
</Motorcon>
  )
}

export default Motorcomponent
