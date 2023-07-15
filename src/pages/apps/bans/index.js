// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Custom Components Imports
import BanList from './component/BanList'
import SuspensionList from './component/SuspensionList'

const BansAndSuspenstion = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PageHeader
            title={
              <Typography variant='h2' sx={{ mb: 6 }}>
                Bans and Suspension
              </Typography>
            }
            subtitle={
              <Typography sx={{ color: 'text.secondary' }}>
                Each category (Ban List and Suspension List) includes actions below.
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <BanList />
        </Grid>
        <Grid item xs={12}>
          <SuspensionList />
        </Grid>
      </Grid>
    </>
  )
}

export default BansAndSuspenstion
