
import { Box, Stack } from '@mui/material'
import React from 'react'
import AssociationContent from './AssociationContent'
import GroupContent from './GroupContent'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import ServiceContent from './ServiceContent'
import Sidebar from './Sidebar'
function Association() {
    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <AssociationContent></AssociationContent>
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default Association