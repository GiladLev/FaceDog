import * as React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import OwnMessage from "./OwnMessage";
import MessageUser from "./MessageUser";

const MessageMui = () => {
  const [own, setOwn] = useState(true);
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box flex={2} p={2}>
        {own ? 
        <Box sx={{display: "flex", 
        justifyContent: "flex-end"}}>
            <OwnMessage /> 
        </Box>  
        : <MessageUser />}

      </Box>
      <Box flex={1} sx={{display: "flex", alignItems: "center"}}>
        <Box flex={8}>
        <TextField sx={{ width: '100%', height: '100%'  }} multiline={true}
        rows={4} id="ouftlined-basic" label="Write somthing..." variant="outlined" />

        </Box>
        <Box flex={1} p={2}>

        <Button  variant="contained">Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageMui;
