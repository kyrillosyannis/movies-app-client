import React, {useEffect, useState} from 'react';
import {fetchAll} from "../api/moviesApi";
import {Button, Grid} from "@mui/material";
import Movie from "./Movie";
import CreateMovieModal from "./CreateMovieModal";

const Movies = ({refreshFlag}) => {
    const [movies, setMovies] = useState([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    useEffect(() => {
        fetchAll(0)
            .then(response => {
                if (response?.content) {
                    setMovies(response.content);
                }
        });
    }, []);

    useEffect(() => {
        setUserIsLoggedIn(localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null);
    }, [refreshFlag]);

    // const userIsLoggedIn = () => {
    //     return localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null;
    // };

    return (
        <>
            {userIsLoggedIn &&
                <Button onClick={() => setCreateModalOpen(true)}>Add Movie </Button>}

            <Grid container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start" spacing={2}
            >
                {movies.map(movie => <Grid key={movie.id} item><Movie movie={movie} /></Grid>)}
            </Grid>
            <CreateMovieModal
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
            />
        </>
    );
};

export default Movies;
