// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import CardContent from '@mui/material/CardContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import LinearProgress from '@mui/material/LinearProgress'
import TableContainer from '@mui/material/TableContainer'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomTextField from 'src/@core/components/mui/text-field'
import UserSubscriptionDialog from 'src/views/apps/user/view/UserSubscriptionDialog'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.2rem',
  left: '-0.6rem',
  position: 'absolute',
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize
}))

// ** Styled <sub> component
const Sub = styled('sub')(({ theme }) => ({
  fontWeight: 300,
  alignSelf: 'flex-end',
  color: theme.palette.text.disabled,
  fontSize: theme.typography.body1.fontSize
}))

// ** row
const rowData = [
  { id: 1, date: '20/01/2021', remark: 'You spent $1,000 at John weds Jane event', time: '12:00pm' },
  { id: 2, date: '02/03/2021', remark: 'You added $1,000', time: '12:00pm' },
  { id: 3, date: '31/11/2021', remark: 'You added $1,000', time: '12:00pm' },
  { id: 4, date: '16/02/2022', remark: 'You added $1,000', time: '12:00pm' },
  { id: 5, date: '23/06/2022', remark: 'You added $1,000', time: '12:00pm' },
  { id: 6, date: '10/12/2022', remark: 'You spent $1,000 at John weds Jane event', time: '12:00pm' },
  { id: 7, date: '20/04/2023', remark: 'You added $1,000', time: '12:00pm' },
  { id: 8, date: '09/07/2023', remark: 'You added $1,000', time: '12:00pm' },
  { id: 9, date: '20/09/2023', remark: 'You added $1,000', time: '12:00pm' }
]

// ** column
const columnData = [
  {
    flex: 0.15,
    minWidth: 110,
    field: 'totalTask',
    headerName: 'Date',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.date}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 350,
    headerName: 'Remark',
    field: 'progressValue',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.remark}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 110,
    field: 'hours',
    headerName: 'Time',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.time}</Typography>
  }
]

const data = [
  {
    cardCvc: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvc: '681',
    imgAlt: 'Visa card',
    expiryDate: '02/24',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    name: 'Mildred Wagner',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: '/images/logos/visa.png'
  },
  {
    cardCvc: '3845',
    expiryDate: '08/20',
    name: 'Lester Jennings',
    imgAlt: 'American Express card',
    cardNumber: '3700 000000 00002',
    imgSrc: '/images/logos/american-express.png'
  }
]

const UserViewBilling = () => {
  // ** States
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')
  const [focus, setFocus] = useState()
  const [cardId, setCardId] = useState(0)
  const [expiry, setExpiry] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [dialogTitle, setDialogTitle] = useState('Add')
  const [openEditCard, setOpenEditCard] = useState(false)
  const [openAddressCard, setOpenAddressCard] = useState(false)
  const [openUpgradePlans, setOpenUpgradePlans] = useState(false)
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

  // Handle Edit Card dialog and get card ID
  const handleEditCardClickOpen = id => {
    setDialogTitle('Edit')
    setCardId(id)
    setCardNumber(data[id].cardNumber)
    setName(data[id].name)
    setCvc(data[id].cardCvc)
    setExpiry(data[id].expiryDate)
    setOpenEditCard(true)
  }

  const handleAddCardClickOpen = () => {
    setDialogTitle('Add')
    setCardNumber('')
    setName('')
    setCvc('')
    setExpiry('')
    setOpenEditCard(true)
  }

  const handleEditCardClose = () => {
    setDialogTitle('Add')
    setCardNumber('')
    setName('')
    setCvc('')
    setExpiry('')
    setOpenEditCard(false)
  }

  // Handle Upgrade Plan dialog
  const handleUpgradePlansClickOpen = () => setOpenUpgradePlans(true)
  const handleUpgradePlansClose = () => setOpenUpgradePlans(false)
  const handleBlur = () => setFocus(undefined)

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Wallet' />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 700, color: theme => theme.palette.primary.main }}>
                    Balance: $5,000
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <Button variant='contained' onClick={handleUpgradePlansClickOpen} sx={{ mr: 4, mb: [2, 0] }}>
                  Add funds
                </Button>
                {/* <Button variant='tonal' color='error' onClick={() => setSubscriptionDialogOpen(true)}>
                  Cancel Subscription
                </Button> */}
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
              Add Money
            </DialogTitle>

            {/* <DialogContent sx={{ px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`] }}>
              <DialogContentText sx={{ textAlign: 'center' }} id='user-view-plans-description'>
                Choose the best plan for the user.
              </DialogContentText>
            </DialogContent> */}

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
            {/* <DialogContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: ['wrap', 'nowrap'],
                pt: theme => `${theme.spacing(2)} !important`,
                pb: theme => `${theme.spacing(8)} !important`,
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
              }}
            >
              <CustomTextField select fullWidth label='Currency Type' defaultValue='us' sx={{ mr: [0, 3], mb: [3, 0] }}>
                <MenuItem value='us'>$ US Dollars</MenuItem>
                <MenuItem value='ngn'>₦ NGN Naira</MenuItem>
                <MenuItem value='gbp'>£ GBP Pounds</MenuItem>
                <MenuItem value='eu'>€ EU Euro</MenuItem>
              </CustomTextField>
            </DialogContent>
            <DialogContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: ['wrap', 'nowrap'],
                pt: theme => `${theme.spacing(2)} !important`,
                pb: theme => `${theme.spacing(8)} !important`,
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
              }}
            >
              <Button variant='contained' sx={{ minWidth: ['100%', 0], mt: 4 }}>
                Done
              </Button>
            </DialogContent> */}

            {/* <DialogContent
              sx={{
                pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(8)} !important`],
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <Typography variant='h6' sx={{ mb: 2, color: theme => theme.palette.text.secondary }}>
                User current plan is standard plan
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: ['wrap', 'nowrap'],
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 3, display: 'flex', ml: 2.4, position: 'relative' }}>
                  <Sup>$</Sup>
                  <Typography
                    variant='h3'
                    sx={{
                      mb: -1.2,
                      lineHeight: 1,
                      color: 'primary.main',
                      fontSize: '3rem !important'
                    }}
                  >
                    99
                  </Typography>
                  <Sub>/ month</Sub>
                </Box>
                <Button color='error' variant='tonal' sx={{ mt: 2 }} onClick={() => setSubscriptionDialogOpen(true)}>
                  Cancel Subscription
                </Button>
              </Box>
            </DialogContent> */}
          </Dialog>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Payment Methods'
            action={
              <Button variant='contained' onClick={handleAddCardClickOpen} sx={{ '& svg': { mr: 1 } }}>
                <Icon icon='tabler:plus' fontSize='1rem' />
                Add Card
              </Button>
            }
          />
          <CardContent>
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 4,
                  display: 'flex',
                  borderRadius: 1,
                  flexDirection: ['column', 'row'],
                  justifyContent: ['space-between'],
                  alignItems: ['flex-start', 'center'],
                  mb: index !== data.length - 1 ? 4 : undefined,
                  border: theme => `1px solid ${theme.palette.divider}`
                }}
              >
                <div>
                  <img height='26' alt={item.imgAlt} src={item.imgSrc} />
                  <Box sx={{ mt: 3.5, mb: 2.5, display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 2, color: 'text.secondary' }}>{item.name}</Typography>
                    {item.cardStatus ? (
                      <CustomChip rounded skin='light' size='small' label={item.cardStatus} color={item.badgeColor} />
                    ) : null}
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }}>
                    **** **** **** {item.cardNumber.substring(item.cardNumber.length - 4)}
                  </Typography>
                </div>

                <Box sx={{ mt: [3, 0], textAlign: ['start', 'end'] }}>
                  <Button variant='tonal' sx={{ mr: 2.5 }} onClick={() => handleEditCardClickOpen(index)}>
                    Edit
                  </Button>
                  <Button variant='tonal' color='secondary'>
                    Delete
                  </Button>
                  <Typography sx={{ mt: [6, 10], color: 'text.secondary' }}>
                    Card expires at {item.expiryDate}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>

          <Dialog
            open={openEditCard}
            onClose={handleEditCardClose}
            aria-labelledby='user-view-billing-edit-card'
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
            aria-describedby='user-view-billing-edit-card-description'
          >
            <DialogTitle
              id='user-view-billing-edit-card'
              sx={{
                textAlign: 'center',
                fontSize: '1.625rem !important',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              {dialogTitle} Card
            </DialogTitle>
            <DialogContent
              sx={{
                pb: theme => `${theme.spacing(5)} !important`,
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
              }}
            >
              <DialogContentText id='user-view-billing-edit-card-description' sx={{ textAlign: 'center', mb: 7 }}>
                {dialogTitle} card for future billing
              </DialogContentText>
              <form>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <CardWrapper sx={{ '& .rccs': { m: '0 auto' } }}>
                      <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={cardNumber} />
                    </CardWrapper>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <CustomTextField
                          fullWidth
                          name='number'
                          value={cardNumber}
                          autoComplete='off'
                          label='Card Number'
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          placeholder='0000 0000 0000 0000'
                          onFocus={e => setFocus(e.target.name)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <CustomTextField
                          fullWidth
                          name='name'
                          value={name}
                          autoComplete='off'
                          onBlur={handleBlur}
                          label='Name on Card'
                          placeholder='John Doe'
                          onChange={e => setName(e.target.value)}
                          onFocus={e => setFocus(e.target.name)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField
                          fullWidth
                          name='expiry'
                          label='Expiry'
                          value={expiry}
                          onBlur={handleBlur}
                          placeholder='MM/YY'
                          onChange={handleInputChange}
                          inputProps={{ maxLength: '5' }}
                          onFocus={e => setFocus(e.target.name)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <CustomTextField
                          select
                          fullWidth
                          label='Card Status'
                          id='user-view-billing-edit-card-status'
                          defaultValue={data[cardId].cardStatus ? data[cardId].cardStatus : ''}
                        >
                          <MenuItem value='Primary'>Primary</MenuItem>
                          <MenuItem value='Expired'>Expired</MenuItem>
                          <MenuItem value='Active'>Active</MenuItem>
                        </CustomTextField>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField
                          fullWidth
                          name='cvc'
                          label='CVC'
                          value={cvc}
                          autoComplete='off'
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          onFocus={e => setFocus(e.target.name)}
                          placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label='Save Card for future billing?'
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions
              sx={{
                justifyContent: 'center',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditCardClose}>
                Submit
              </Button>
              <Button variant='tonal' color='secondary' onClick={handleEditCardClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Transactions' />
          <CardContent>
            <DataGrid
              autoHeight
              rows={rowData}
              rowHeight={60}
              columns={columnData}
              disableRowSelectionOnClick
              pageSizeOptions={[7, 10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
            />
          </CardContent>

          <Dialog
            open={openAddressCard}
            onClose={() => setOpenAddressCard(false)}
            aria-labelledby='user-address-edit'
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
            aria-describedby='user-address-edit-description'
          >
            <DialogTitle
              id='user-address-edit'
              sx={{
                textAlign: 'center',
                fontSize: '1.625rem !important',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              Edit Address
            </DialogTitle>
            <DialogContent
              sx={{
                pb: theme => `${theme.spacing(8)} !important`,
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
              }}
            >
              <DialogContentText id='user-address-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
                Edit Address for future billing
              </DialogContentText>
              <form>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField fullWidth defaultValue='Pixinvent' label='Company Name' placeholder='pixinvent' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField
                      fullWidth
                      type='email'
                      label='Email'
                      placeholder='john.doe@gmail.com'
                      defaultValue='gertrude@gmail.com'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField fullWidth defaultValue='TAX-875623' label='Tax ID' placeholder='TAX-875623' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField fullWidth defaultValue='SDF754K77' label='VAT Number' placeholder='SDF754K77' />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      fullWidth
                      multiline
                      minRows={2}
                      label='Billing Address'
                      placeholder='12, Business Park, Mall Road'
                      defaultValue='100 Water Plant Avenue, Building 1303 Wake Island'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField
                      fullWidth
                      label='Contact'
                      placeholder='723-348-2344'
                      defaultValue='+1(609) 933-44-22'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField select fullWidth id='country-select' defaultValue='usa' label='Country'>
                      <MenuItem value='usa'>USA</MenuItem>
                      <MenuItem value='uk'>UK</MenuItem>
                      <MenuItem value='france'>France</MenuItem>
                      <MenuItem value='germany'>Germany</MenuItem>
                      <MenuItem value='japan'>Japan</MenuItem>
                    </CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField fullWidth defaultValue='Capholim' label='State' placeholder='California' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField
                      fullWidth
                      type='number'
                      label='Zip Code'
                      placeholder='99950'
                      defaultValue='403114'
                    />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions
              sx={{
                justifyContent: 'center',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <Button variant='contained' sx={{ mr: 2 }} onClick={() => setOpenAddressCard(false)}>
                Submit
              </Button>
              <Button variant='tonal' color='secondary' onClick={() => setOpenAddressCard(false)}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserViewBilling
