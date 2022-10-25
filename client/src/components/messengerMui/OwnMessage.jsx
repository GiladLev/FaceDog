import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";

const OwnMessage = () => {
  return (
    <Paper sx={{ maxWidth: "300px", borderRadius: "25px", bgcolor: 'primary.main' }}>
            <Box
              p={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: 'row-reverse'
              }}
            >
              <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />

              <Typography sx= {{color:'secondary.contrastText'}} varient="p">hello</Typography>
            </Box>
        </Paper>
  )
}

export default OwnMessage