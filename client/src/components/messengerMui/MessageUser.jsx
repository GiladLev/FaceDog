import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
const MessageUser = () => {
  return (
    <Paper sx={{ maxWidth: "300px", borderRadius: "25px" }}>
            <Box
              p={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />

              <Typography varient="p">hello</Typography>
            </Box>
          </Paper>
  )
}

export default MessageUser