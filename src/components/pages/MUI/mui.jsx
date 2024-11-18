import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films1 from './top100Films';

const Mui1component = () => {
  return (
    <div>
    <Autocomplete
    disablePortal
    options={top100Films1}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Quantity" />}
  />
  </div>

  )
}

export default Mui1component
