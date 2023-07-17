// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData, deleteUser } from 'src/store/apps/user'

// ** Third Party Components
import axios from 'axios'
import CardStatsHorizontalWithDetails from 'src/@core/components/card-statistics/card-stats-horizontal-with-details'

const userStatusObj = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const columns = [
  {
    flex: 0.2,
    field: 'from',
    minWidth: 100,
    headerName: 'From',
    renderCell: ({ row }) => (
      <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
        {row.username}
      </Typography>
    )
  },
  {
    flex: 0.3,
    minWidth: 80,
    field: 'content',
    headerName: 'Content',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.email}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => {
      return (
        <CustomChip
          rounded
          skin='light'
          size='small'
          label={row.status}
          color={userStatusObj[row.status]}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant='contained'>Moderate Messages</Button>
      </Box>
    )
  }
]

const FlaggedContents = ({ apiData }) => {
  // ** State
  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)
  useEffect(() => {
    dispatch(
      fetchData({
        role,
        status,
        q: value,
        currentPlan: plan
      })
    )
  }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        {apiData && (
          <Grid container spacing={6}>
            {apiData.statsHorizontalWithDetails.map((item, index) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <CardStatsHorizontalWithDetails {...item} />
                </Grid>
              )
            })}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Flagged Contents'
            action={<CustomTextField value={value} placeholder='Search' onChange={e => handleFilter(e.target.value)} />}
          />

          <DataGrid
            autoHeight
            rowHeight={62}
            rows={store.data}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

export default FlaggedContents
