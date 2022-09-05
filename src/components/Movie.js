import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const Movie = ({movie}) => {
    return <>
        <Card sx={{ width: '35vw' }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    {movie.title}
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    Posted by {movie.username}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {movie.description}
                </Typography>
            </CardContent>
        </Card>
    </>;
};

export default Movie;
