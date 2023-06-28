// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import Image from 'next/image'

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      {/* loader icon/image */}
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
