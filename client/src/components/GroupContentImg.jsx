import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';

export default function StandardImageList() {
    return (
        <div>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                Latest photos
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                    <img src="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649__340.jpg" />
                </ImageListItem>
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
