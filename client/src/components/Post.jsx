import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {format} from "timeago.js"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { AuthContext } from "../context/AuthContext";

const Post = ({post}) => {

  const [likes, setLikes] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    // render likes state
    setIsLiked(post.likes.includes(user._id));
  }, [post.likes]);
  useEffect(() => {
    // render likes state
    console.log(likes);
  }, [likes, isLiked]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await publicRequest.get(`/users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  const  likeHandler = async()=>{
    try {
      const res = await publicRequest.put(`posts/like/${post._id}`, {"userId": user._id})
      console.log(res.data.likes);
      setLikes(res.data.likes.length)
      setIsLiked(!isLiked);
    } catch (error) { }
  }
  return (
    <Card sx={{ margin: 5 }}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={user.username}
        subheader={format(post.createdAt)}
      />

      
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likeHandler}>
          <Checkbox
            icon={<FavoriteBorder />}
            checked={isLiked}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <Typography>
            {likes}
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;