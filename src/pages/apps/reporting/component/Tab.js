// ** React Imports
import { useState } from 'react'
// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MuiTabList from '@mui/lab/TabList'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import ActionLogsTab from './ActionLogs'
import ReportedEvents from './ReportedEvents'
import ReportedUsers from './ReportedUsers'
import FlaggedContents from './FlaggedContents'
import FlaggedMessages from './FlaggedMessages'

// Styled TabList component
const MuiBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}))

const TabList = styled(MuiTabList)(({ theme }) => ({
  borderRight: 0,
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    },
    '& svg': {
      marginBottom: 0,
      marginRight: theme.spacing(2)
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%'
    }
  }
}))

const ReportFLaggingTabs = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='customized tabs example'>
        <Tab value='1' label='Reported Events' />
        <Tab value='2' label='Reported Users' />
        <Tab value='3' label='Flagged Contents' />
        <Tab value='4' label='Flagged Messages' />
        <Tab value='5' label='Action Logs' />
      </TabList>
      <TabPanel value='1'>
        <ReportedEvents />
      </TabPanel>
      <TabPanel value='2'>
        <ReportedUsers />
      </TabPanel>
      <TabPanel value='3'>
        <FlaggedContents />
      </TabPanel>
      <TabPanel value='4'>
        <FlaggedMessages />
      </TabPanel>
      <TabPanel value='5'>
        <ActionLogsTab />
      </TabPanel>
    </TabContext>
  )
}

export default ReportFLaggingTabs
