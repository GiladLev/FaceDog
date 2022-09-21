import { Avatar, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignitem: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignitem: "center",
  gap: "10px",
  marginBottom: "20px" 

});
export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2ojpmtX-a5djgBC3PGlyuHRm8Po0wgYAS_k2TEYE&s"
            />
            <Typography fontWeight={500} variant="span">
              Jhoan
            </Typography>
          </UserBox>
          <TextField
          sx={{width: "100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Post new dog"
          variant="standard"
        />
        <Stack direction="row" gap= {1} mt={2} mb={3}>
            <Image color="error"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="primary"/>
        </Stack>
        <Button  fullWidth variant="contained" aria-label=" primary">Post</Button>
        </Box>
      </StyledModal>
    </Box>
  );
};
