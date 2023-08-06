// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

const PickersTime = ({ popperPlacement }) => {
  // ** States
  const [time, setTime] = useState(new Date())
  const [dateTime, setDateTime] = useState(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePicker
        showTimeSelect
        selected={time}
        timeIntervals={15}
        showTimeSelectOnly
        dateFormat='h:mm aa'
        id='time-only-picker'
        popperPlacement={popperPlacement}
        onChange={date => setTime(date)}
        customInput={<CustomInput fullWidth label='Time' />}
      />
    </Box>
  )
}

export default PickersTime
