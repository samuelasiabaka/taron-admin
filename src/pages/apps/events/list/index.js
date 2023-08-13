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

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import EventCard from '../components/EventCard'

const eventDate = new Date()

const eventsList = [
  { category: 'Livestyle', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Travel', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Outdoor', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Music', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Travel', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Business', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Religious', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Funeral', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Birthday', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Sport', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' },
  { category: 'Festival', title: 'Desert Safari - Dubai DX', date: 'Date | Time', location: '123 Avenue, New York' }
]

const EditBlogEvent = () => {
  const [role, setRole] = useState('')

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PageHeader
          title={
            <Typography variant='h2' sx={{ mb: 3 }}>
              Events List
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Typography variant='h4'>Events</Typography>
          <CustomTextField
            width='auto'
            select
            defaultValue='All'
            SelectProps={{
              value: role,
              displayEmpty: true,
              onChange: e => handleRoleChange(e)
            }}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='past'>Past</MenuItem>
            <MenuItem value='upcoming'>Upcoming</MenuItem>
          </CustomTextField>
        </Box>
      </Grid>
      <Grid container spacing={6} className='match-height' pl={5}>
        {eventsList.map(event => (
          <Grid item md={4} sm={6} xs={12}>
            <Link style={{ textDecoration: 'none' }} href={`/apps/events/list/${event.category}`}>
              <EventCard event={event} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default EditBlogEvent
