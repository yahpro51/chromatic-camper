import React from 'react'
import { Cardbtn, H1} from '../../motor/style'
import { Wallcon } from '../../motor/style'
import { useParams } from 'react-router-dom'
import { tuning } from '../mock'

const Wallcomponent = () => {
    let {id} = useParams();
    const dataById = tuning.find((data)=> data.id === parseInt(id))
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