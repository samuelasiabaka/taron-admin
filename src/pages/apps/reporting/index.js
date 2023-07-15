// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import axios from 'axios'

import ReportFLaggingTabs from './component/Tab'

const ReportAndFlagging = ({ apiData }) => {
  // ** States
  const [data, setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('payment')
  useEffect(() => {
    if (searchTerm !== '') {
      axios.get('/pages/faqs', { params: { q: searchTerm } }).then(response => {
        if (response.data.faqData && Object.values(response.data.faqData).length) {
          setData(response.data)

          // @ts-ignore
          setActiveTab(Object.values(response.data.faqData)[0].id)
        } else {
          setData(null)
        }
      })
    } else {
      setData(apiData)
    }
  }, [apiData, searchTerm])

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const renderNoResult = (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', '& svg': { mr: 2 } }}>
      <Icon fontSize='1.5rem' icon='tabler:alert-circle' />
      <Typography variant='h5'>No Results Found!!</Typography>
    </Box>
  )

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PageHeader
          title={
            <Typography variant='h2' sx={{ mb: 1 }}>
              Reporting and Flagging
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <ReportFLaggingTabs />
      </Grid>
    </Grid>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/pages/faqs')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

export default ReportAndFlagging
