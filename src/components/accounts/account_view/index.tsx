import SideBar from '../../layout/sidebar'
import { Box } from '@chakra-ui/react'
import SingleAccountBody from './body'

const AccountView = () => {
  return (
    <Box
        display='grid' 
        gridTemplateColumns={{ base: '13rem auto', md: '13rem auto', xl: '13rem auto' }}
        fontFamily='IBM Plex Sans, sans-serif'
    >
        <SideBar />

        {/* content */}
        <SingleAccountBody />
    </Box>
  )
}

export default AccountView