// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

const PickersBasic = ({ popperPlacement }) => {
  // ** States
  const [date, setDate] = useState(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePicker
        selected={date}
        id='basic-input'
        popperPlacement={popperPlacement}
        onChange={date => setDate(date)}
        placeholderText='Click to select a date'
        customInput={<CustomInput fullWidth label='Date' />}
      />
    </Box>
  )
}

export default PickersBasic
