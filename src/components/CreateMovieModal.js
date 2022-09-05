import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {create} from "../api/moviesApi";

const CreateMovieModal = ({
                              open,
                              onClose,
                          }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        create({title, description, username: user.username, userId: user.id});
    };

    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Box sx={style}>
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}>
                    <Grid item>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Create movie
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="title"
                                   value={title}
                                   onChange={event => setTitle(event.target.value)}
                                   label="Title"
                                   variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField id="password"
                                   value={description}
                                   onChange={event => setDescription(event.target.value)}
                                   label="Description"
                                   variant="outlined"
                                   multiline
                                   maxRows={4}
                                   onKeyUp={(event) => {
                                       if (event.key === 'Enter') {
                                           onSubmit();
                                       }
                                   }}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={onSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default CreateMovieModal;
