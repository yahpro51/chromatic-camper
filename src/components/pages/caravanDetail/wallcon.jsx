import React from 'react'
import { Cardbtn, H1, Pp,} from '../motor/style'
import { Wallcon } from '../motor/style'
import { useParams } from 'react-router-dom'
import { caravans } from '../caravan/mock'

const Wallcomponent = () => {
    let {id} = useParams();
    const dataById = caravans.find((data)=> data.id === parseInt(id))
  return (
<Wallcon>
    <H1>{dataById.car.name}</H1>
    <Cardbtn>
                      <button>Order</button>
                      <button>Compare</button>
                    </Cardbtn>
</Wallcon>
  )
}

export default Wallcomponent
