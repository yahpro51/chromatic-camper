import React from 'react'
import { Shopcon } from './style'
import Filtercomponent from './filter'
import Datacomponent from './data'

const Shopcomponent = () => {
  return (
<Shopcon>
    <Filtercomponent/>
    <Datacomponent/>
</Shopcon>
  )
}

export default Shopcomponent
