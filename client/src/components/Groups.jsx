import { Box, Stack } from '@mui/material'
import React from 'react'
import GroupContent from './GroupContent'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

function Groups() {
    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <GroupContent></GroupContent>
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default Groups