import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Box, Stack, Button, Paper, FormControl, FormLabel, FormHelperText, InputBase, MenuItem, Select, MenuList } from '@mui/material'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AddToTaslModa from '../Modals/AddToTaslModa';
// import AddToTaslModa from '../Modals/AddToTaslModa';

type Props = {}

function Navbar({ }: Props) {
    const [open, setOpen] = useState<boolean>(false)

    const handleClose = () => { setOpen(false) }


    return (
        <>
            <AppBar position="sticky"
                sx={{ background: '#2b2c37', border: "1px solid rgba(255,255,255, 0.1)" }}>
                <Toolbar>
                    <Stack sx={{ width: "100%" }} direction="row" justifyContent="space-between" alignItems="center">
                        <Box sx={{ padding: "1rem", display: { xs: "none", sm: "block" } }}>
                            <Typography variant="h6">
                                Kanban
                            </Typography>
                        </Box>
                        <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{ flexGrow: 0.9, background: "" }}>
                            <Typography variant="h6">
                                Project Title Here
                            </Typography>
                            <Button
                                variant="contained"
                                color="inherit"
                                sx={{ display: { xs: "none", sm: "block" }, background: "#635fc7", color: "white", borderRadius: "2.5rem", "&:hover": { background: "#635fc7", color: "white", } }}
                                //  startIcon={}
                                onClick={() => {
                                    setOpen(true)
                                }}

                            >
                                Add Task
                            </Button>
                            <Button
                                variant="contained"
                                color="inherit"
                                sx={{ display: { xs: "block", sm: "none" }, background: "#635fc7", color: "white", borderRadius: "2.5rem", "&:hover": { background: "#635fc7", color: "white", } }}
                                //  startIcon={}
                                onClick={() => {
                                    setOpen(true)
                                }}

                            >
                                +
                            </Button>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar >
            <AddToTaslModa open={open} handleClose={handleClose} />
        </>
    )
}

export default Navbar