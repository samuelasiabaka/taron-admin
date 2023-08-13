// ** React Imports
import { useState, forwardRef } from 'react'
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
import { Avatar, AvatarGroup, Box, Dialog, DialogActions, DialogContent, Fade, IconButton } from '@mui/material'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import useBgColor from 'src/@core/hooks/useBgColor'

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

export default function EventCard({ event }) {
  // ** Hook
  const theme = useTheme()
  const { direction } = theme

  return (
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
          {event.category}
        </Typography>
      </Button>
      <CardContent>
        <Box>
          <Typography gutterBottom variant='h5' component='div' fontWeight={700}>
            {event.title}
          </Typography>
        </Box>
        <Box pb={2} spacing={3}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignContent: 'center' }}>
            <Icon icon='tabler:clock' />
            <Typography variant='body2' color='text.secondary'>
              {event.date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignContent: 'center' }}>
            <Icon icon='tabler:map-pin-filled' color='red' />
            <Typography variant='body2' color='text.secondary'>
              {event.location}
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
        </Box>
      </CardContent>
    </Card>
  )
}
