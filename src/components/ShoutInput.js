import { Heading, Box, Input } from '@chakra-ui/react';

const ShoutInput = ({shout, changeHandler}) => {
    return (
        <Box >
            <Heading as='h5' fontSize='20px' my='20px'>Input</Heading>
            <Input type="text" TextAlign='center' value={ shout } onChange={ changeHandler } />
        </Box>
    )
}

export default ShoutInput;