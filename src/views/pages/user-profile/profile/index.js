// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutOverivew from 'src/views/pages/user-profile/profile/AboutOverivew'
import ProjectsTable from 'src/views/pages/user-profile/profile/ProjectsTable'
import EventsTable from 'src/views/pages/user-profile/profile/EventsTable'
import TransactionHistory from 'src/views/pages/user-profile/profile/TransactionHistory'
import ActivityTimeline from 'src/views/pages/user-profile/profile/ActivityTimeline'
import ConnectionsTeams from 'src/views/pages/user-profile/profile/ConnectionsTeams'
import InvoiceListTable from 'src/views/apps/user/view/UsersInvoiceListTable'

const ProfileTab = ({ data }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item lg={4} md={5} xs={12}>
        <AboutOverivew about={data.about} contacts={data.contacts} teams={data.teams} overview={data.overview} />
      </Grid>
      <Grid item lg={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ActivityTimeline />
          </Grid>
          <Grid item xs={12}>
            <EventsTable />
          </Grid>
          <Grid item xs={12}>
            <TransactionHistory />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

export default ProfileTab
