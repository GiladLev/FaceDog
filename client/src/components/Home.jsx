import { Box, Stack } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

function Home() {
    return (
        <Box>

            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default Home