import { Box, Stack } from '@mui/material'
import React from 'react'
import ChatOnlineMui from '../../components/messengerMui/ChatOnlineMui'
import ConversationMui from '../../components/messengerMui/ConversationMui'
import MessageMui from '../../components/messengerMui/MessageMui'
import Navbar from '../../components/Navbar'

const ChatMui = () => {
  return (
    <Box>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between" sx ={{height: '100vh', width: '100vw'}}>
                <Box flex={2} p={2}>
                    <ConversationMui/>
                </Box>
                <Box flex={4} p={2} >
                    <MessageMui/>
                </Box>
                <Box flex={2} p={2}>
                    <ChatOnlineMui/>
                    <ChatOnlineMui/>
                    <ChatOnlineMui/>
                </Box>
            </Stack>
        </Box>
  )
}

export default ChatMui