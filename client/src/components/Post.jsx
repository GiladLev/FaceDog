import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
function Post({dogName ,description ,image, deleteTodo, id}) {
  
  return (
    <Box sx={{margin:5}}>
        <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => deleteTodo(id)}>
              <MoreVert />
            </IconButton>
          }
          title={dogName}
          subheader="September 14, 2016"
          />
        <CardMedia
          component="img"
          height="20% "
          image={image}
          
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
              sx={{ color: "red" }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Post
