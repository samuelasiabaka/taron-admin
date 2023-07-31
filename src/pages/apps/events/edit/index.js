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

const EditBlogEvent = () => {
  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <PageHeader
          title={
            <Typography variant='h2' sx={{ mb: 6 }}>
              Edit Event Blog Post
            </Typography>
          }
        />
      </Grid>
    </Grid>
  )
}

export default EditBlogEvent
