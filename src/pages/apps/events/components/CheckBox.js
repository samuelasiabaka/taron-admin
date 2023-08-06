// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckBox = () => {
  // ** State
  const [checked, setChecked] = useState(true)

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel
        label='Disable Commets'
        control={<Checkbox checked={checked} onChange={handleChange} name='controlled' />}
      />
    </FormGroup>
  )
}

export default CheckBox
