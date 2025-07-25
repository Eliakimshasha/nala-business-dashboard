import { Flex, ModalCloseButton } from '@chakra-ui/react'
import { Divider, Typography } from 'antd';
import DepositProcessTabs from '../../../deposit/sections/deposit_tabs';
import AppButton from '../../../layout/button';

const { Text } = Typography;

const PatientDetails = ({onClose}: {onClose: () => void}) => {
  return (
    <Flex direction='column' marginBottom='10px'>
        
        {/* close button */}
        <ModalCloseButton />
        <Text
            style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '20px',
                fontWeight: 500,
                color: '#000',
                width: '90%',
                marginTop: '15px'
            }}
        >
            Patient details
        </Text>

        {/* tabs */}
        <DepositProcessTabs />

        {/* footer */}
        <Divider style={{marginTop: '10px', marginBottom: '15px'}} />
        {/* button */}
        <Flex justifyContent='flex-end'>
            <AppButton
                label="Done"
                background='#073DFC'
                color='#fff'
                width='150px'
                borderColor='#073DFC'
                onClick={onClose}
            />
        </Flex>
    </Flex>
  )
}

export default PatientDetails