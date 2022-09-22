import { Box, Stack } from '@mui/material'
import React from 'react'
import GroupContent from './GroupContent'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import ServiceContent from './ServiceContent'
import Sidebar from './Sidebar'

function Service() {
    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <ServiceContent></ServiceContent>
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default Service