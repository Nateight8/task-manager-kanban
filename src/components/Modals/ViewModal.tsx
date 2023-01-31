import { Backdrop, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Paper, Typography, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

function ViewModal({ open, setopen, description, title }: Props) {

    const listTextStyle = {
        color: "white",
        fontSize: "1.25rem",
        ".MuiListItemText-secondary": { color: "#818ea3", paddingY: "1rem" },
    }

    // const { title, description, subtask } = task

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: '#2b2c37',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    // console.log(subtask);

    return (
        <>
            <Modal
                // sx={{ background: "RGBA(129, 142, 163,0.1)" }}
                disableAutoFocus
                open={open}
                onClose={() => { setopen(false) }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>

                <Paper sx={{ ...style, color: 'white' }}>
                    <List>
                        <ListItemText sx={listTextStyle} primary={title} secondary={description} />
                    </List>
                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard" fullWidth>

                        <FormLabel component="legend">Status</FormLabel>
                        {
                            [1, 2, 3, 4].map((subtask) => {
                                return (
                                    <FormControlLabel
                                        sx={{ background: "#20212c", my: 0.2, }}
                                        control={
                                            <Checkbox
                                                size='small'
                                                // checked={gilad}
                                                // onChange={handleChange}
                                                name="gilad" />
                                        }
                                        label="Gilad Gray"
                                    />
                                )
                            })
                        }

                    </FormControl>
                </Paper>
            </Modal>
        </>
    )
}

export default ViewModal