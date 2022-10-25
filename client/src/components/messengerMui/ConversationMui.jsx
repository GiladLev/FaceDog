import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'

export default function ConversationMui() {
  return (

    <>
    <TextField fullWidth label="Search for friends" variant="standard"/>
    <List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Typography>
            Gilad Lev
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

    </>
  );
}
