// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'

import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomTextField from 'src/@core/components/mui/text-field'
import UserSubscriptionDialog from 'src/views/apps/user/view/UserSubscriptionDialog'
import BillingGraph from './BillingGraph'

// ** Styled component for the link in the dataTable
const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

// ** Vars

// ** renders client column
const renderClient = row => {
  if (row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 2.5, width: 38, height: 38 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={row.avatarColor || 'primary'}
        sx={{ mr: 2.5, fontWeight: 500, fontSize: '1rem', width: 38, height: 38 }}
      >
        {getInitials(row.name || 'John Doe')}
      </CustomAvatar>
    )
  }
}

const defaultColumns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 90,
    headerName: 'ID',
    renderCell: ({ row }) => (
      <Typography component={LinkStyled} href={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Typography>
    )
  },
  {
    flex: 0.15,
    minWidth: 140,
    field: 'issuedDate',
    headerName: 'Date/Time',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.issuedDate}</Typography>
  },

  {
    flex: 0.25,
    field: 'name',
    minWidth: 280,
    headerName: 'Event',
    renderCell: ({ row }) => {
      const { name, companyEmail } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {name}
            </Typography>
            <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
              {companyEmail}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 130,
    field: 'invoiceStatus',
    headerName: 'Remark',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>VIP Tickets</Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'total',
    headerName: 'Amount',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{`$${row.total || 0}`}</Typography>
  },

  {
    flex: 0.1,
    minWidth: 100,
    field: 'balance',
    headerName: 'Balance',
    renderCell: ({ row }) => {
      return row.balance !== 0 ? (
        <Typography sx={{ color: 'text.secondary' }}>{row.balance}</Typography>
      ) : (
        <CustomChip rounded size='small' skin='light' color='success' label='Paid' />
      )
    }
  }
]
/* eslint-disable */
const CustomInput = forwardRef((props, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null
  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates
  return <CustomTextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})

/* eslint-enable */
const BillingHistoryTable = () => {
  // ** State
  const [value, setValue] = useState('')
  const [statusValue, setStatusValue] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)
  const [openUpgradePlans, setOpenUpgradePlans] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)
  useEffect(() => {
    dispatch(
      fetchData({
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value])

  const handleUpgradePlansClickOpen = () => setOpenUpgradePlans(true)
  const handleUpgradePlansClose = () => setOpenUpgradePlans(false)
  const handleBlur = () => setFocus(undefined)

  const handleFilter = val => {
    setValue(val)
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
  }

  // ** Var
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 140,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Invoice'>
            <IconButton size='small' onClick={() => dispatch(deleteInvoice(row.id))}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <IconButton size='small' component={Link} href={`/apps/invoice/preview/${row.id}`}>
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: 'Download',
                icon: <Icon icon='tabler:download' fontSize={20} />
              },
              {
                text: 'Edit',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='tabler:edit' fontSize={20} />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon='tabler:copy' fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <Card>
      <CardHeader title='Earnings' />
      <>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, color: theme => theme.palette.primary.main }}>
                  Balance: $50,000
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <UserSubscriptionDialog open={subscriptionDialogOpen} setOpen={setSubscriptionDialogOpen} />

        <Dialog
          open={openUpgradePlans}
          onClose={handleUpgradePlansClose}
          aria-labelledby='user-view-plans'
          aria-describedby='user-view-plans-description'
          sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
        >
          <DialogTitle
            id='user-view-plans'
            sx={{
              textAlign: 'center',
              fontSize: '1.625rem !important',
              px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
              pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
            }}
          >
            Withdraw Money
          </DialogTitle>

          <DialogContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 8,
              overflow: 'hidden',
              flexWrap: ['wrap', 'nowrap'],
              pt: theme => `${theme.spacing(2)} !important`,
              pb: theme => `${theme.spacing(8)} !important`,
              px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
            }}
          >
            <CustomTextField
              fullWidth
              autoFocus
              label='Amount'
              type='number'
              placeholder='0.00'
              sx={{ mr: [0, 3], mb: [3, 0] }}
            />
            <CustomTextField select fullWidth label='Currency Type' defaultValue='us' sx={{ mr: [0, 3], mb: [3, 0] }}>
              <MenuItem value='us'>$ US Dollars</MenuItem>
              <MenuItem value='ngn'>₦ NGN Naira</MenuItem>
              <MenuItem value='gbp'>£ GBP Pounds</MenuItem>
              <MenuItem value='eu'>€ EU Euro</MenuItem>
            </CustomTextField>
            <Button variant='contained' sx={{ minWidth: ['100%', 0], mt: 4 }}>
              Done
            </Button>
          </DialogContent>
        </Dialog>
      </>
      <CardContent sx={{ pb: 4 }}>
        <Box
          sx={{
            gap: 4,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button variant='contained' onClick={handleUpgradePlansClickOpen} sx={{ mr: 4, mb: [2, 0] }}>
            Payout
          </Button>
          <Box
            sx={{
              gap: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <CustomTextField value={value} placeholder='Search' onChange={e => handleFilter(e.target.value)} />
            <>
              <Button
                variant='tonal'
                color='secondary'
                aria-haspopup='true'
                onClick={handleClick}
                aria-expanded={open ? 'true' : undefined}
                endIcon={<Icon icon='tabler:chevron-down' />}
                aria-controls={open ? 'user-view-overview-export' : undefined}
              >
                Export
              </Button>
              <Menu open={open} anchorEl={anchorEl} onClose={handleClose} id='user-view-overview-export'>
                <MenuItem onClick={handleClose}>PDF</MenuItem>
                <MenuItem onClick={handleClose}>XLSX</MenuItem>
                <MenuItem onClick={handleClose}>CSV</MenuItem>
              </Menu>
            </>
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 4 }}>
        <BillingGraph />
      </CardContent>
      <DataGrid
        autoHeight
        pagination
        rows={store.data}
        columns={columns}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Card>
  )
}

export default BillingHistoryTable
