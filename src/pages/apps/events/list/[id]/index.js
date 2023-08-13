// ** React Imports
import { useState, forwardRef } from 'react'
// ** Next Imports
import Link from 'next/link'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {
  Avatar,
  AvatarGroup,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  IconButton
} from '@mui/material'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import useBgColor from 'src/@core/hooks/useBgColor'

import CheckBox from '../../components/CheckBox'
import DatePickerSelect from '../../components/DatePickerSelect'
import TimePicker from '../../components/TimePicker'
import EventBanner from '../../components/EventBanner'

import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const Event = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  // ** Hook
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'
  const bgColors = useBgColor()

  // ** DeleteButton
  const handleClickOpen = () => {
    setShowDelete(true)
  }

  const handleClose = () => {
    setShowDelete(false)
  }

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <PageHeader
          title={
            <Typography variant='h2' sx={{ mb: 6 }}>
              Event Page
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ position: 'relative' }}>
          <CardMedia component='img' alt='green iguana' height='140' image='/images/cards/glass-house.png' />
          <Button
            sx={{
              left: '1rem',
              top: '1rem',
              position: 'absolute',
              opacity: '50%',
              backgroundColor: 'skyblue',
              padding: 2
            }}
          >
            <Typography color='white' opacity='100%'>
              Livestyle
            </Typography>
          </Button>
          <CardContent>
            <Box>
              <Typography gutterBottom variant='h5' component='div' fontWeight={700}>
                Desert Safari - Dubai DX
              </Typography>
            </Box>
            <Box pb={2} spacing={3}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignContent: 'center' }}>
                <Icon icon='tabler:clock' />
                <Typography variant='body2' color='text.secondary'>
                  Date | Time
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignContent: 'center' }}>
                <Icon icon='tabler:map-pin-filled' color='red' />
                <Typography variant='body2' color='text.secondary'>
                  123 Avenue, New York
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <AvatarGroup max={4}>
                <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                <Avatar src='/images/avatars/3.png' alt='Howard Lloyd' />
                <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />
                <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />
                <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
              </AvatarGroup>
              <Button size='small'>
                <Icon icon='mdi:share' />
              </Button>
            </Box>
            <Box pt={2} spacing={3}>
              <Typography variant='body2' color='text.secondary'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque ipsa autem repellendus optio
                rerum iusto assumenda aut aperiam alias.
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant='contained' onClick={() => setShow(true)}>
              Edit
            </Button>
            <Button variant='contained' onClick={handleClickOpen}>
              Delete
            </Button>
          </CardActions>
          <Dialog
            fullWidth
            open={show}
            maxWidth='md'
            scroll='body'
            onClose={() => setShow(false)}
            TransitionComponent={Transition}
            onBackdropClick={() => setShow(false)}
            sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
          >
            <DialogContent
              sx={{
                pb: theme => `${theme.spacing(8)} !important`,
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <CustomCloseButton onClick={() => setShow(false)}>
                <Icon icon='tabler:x' fontSize='1.25rem' />
              </CustomCloseButton>
              <Box sx={{ mb: 5, textAlign: 'center' }}>
                <Typography variant='h3' sx={{ mb: 3 }}>
                  Edit Event
                </Typography>
              </Box>
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
                            <EventBanner />
                          </DropzoneWrapper>
                        </Grid>
                        <Grid item xs={12}>
                          <CustomTextField
                            select
                            fullWidth
                            defaultValue='default'
                            label='Event Category'
                            id='custom-select'
                          >
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
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </DialogContent>
            <DialogActions
              sx={{
                justifyContent: 'center',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShow(false)}>
                Update
              </Button>
              <Button variant='tonal' color='secondary' onClick={() => setShow(false)}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={showDelete}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby='alert-dialog-slide-description'
          >
            <DialogTitle>{'Delete Event?'}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-slide-description'>
                This action will permanently delete event.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Event
