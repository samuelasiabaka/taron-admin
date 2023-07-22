// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'

import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './components/PickersCustomInput'
import CheckBox from './components/CheckBox'
import DatePickerSelect from './components/DatePickerSelect'
import TimePicker from './components/TimePicker'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Styled Component
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import EVentBanner from './components/EventBanner'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Creation = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  // ** Hook
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <PageHeader
          title={
            <Typography variant='h2' sx={{ mb: 6 }}>
              Create Event Blog Post
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CustomTextField fullWidth label='Event Title' placeholder='Title' />
                </Grid>
                <Grid item xs={12}>
                  <DropzoneWrapper>
                    <EVentBanner />
                  </DropzoneWrapper>
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField select fullWidth defaultValue='default' label='Event Category' id='custom-select'>
                    <MenuItem value='default' disabled>
                      <em>Select Category</em>
                    </MenuItem>
                    <MenuItem value='In-person event'>In-person event</MenuItem>
                    <MenuItem value='Audio event'>Audio event</MenuItem>
                    <MenuItem value='Online event'>Online</MenuItem>
                    <MenuItem value='Hybrid event'>In-person + Online</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    fullWidth
                    rows={4}
                    multiline
                    label='Event Details'
                    defaultValue=''
                    id='textarea-outlined-static'
                  />
                </Grid>
                <Grid item xs={12}>
                  <DatePickerSelect popperPlacement={popperPlacement} />
                </Grid>
                <Grid item xs={12}>
                  <TimePicker popperPlacement={popperPlacement} />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField fullWidth label='Location' placeholder='' />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField fullWidth label='Location URL and Map' placeholder='' />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField fullWidth label='Tags' placeholder='' />
                </Grid>
                <Grid item xs={12}>
                  <CheckBox />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      gap: 5,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button fullWidth type='submit' variant='contained'>
                      Create Blog Post
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Creation
