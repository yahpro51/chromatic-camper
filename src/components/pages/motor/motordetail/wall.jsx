import React from 'react'
import { Cardbtn, H1, Pp,} from '../style'
import { Wallcon } from '../style'
import { useParams } from 'react-router-dom'
import { motordata } from '../mock'

const Wallcomponent = () => {
    let {id} = useParams();
    const dataById = motordata.find((data)=> data.id === parseInt(id))
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