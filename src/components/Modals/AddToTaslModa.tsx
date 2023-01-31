import React, { useState } from 'react'
import { Toolbar, Box, Stack, Button, Paper, FormControl, FormLabel, FormHelperText, InputBase, MenuItem, Select, MenuList, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ClearIcon from '@mui/icons-material/Clear';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    FieldArray
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '@/redux/features/taskSlice';
import { Subtask } from '@/utils/interface';


type Props = {
    open: boolean;
    handleClose: () => void;
}

function AddToTaslModa({ open, handleClose }: Props) {



    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            border: "1px solid #444450",

        }, "& :hover": { borderColor: "#635FC7" },

    }));

    const StyledSelect = styled(Select)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            border: "1px solid #444450",

        }, "& :hover": { borderColor: "#635FC7" },

    }));


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


    interface MyFormValues {
        description: string;
        title: string;
        status: string;
        subtasks: Subtask[]
    }



    // isComplete
    const initialValues: MyFormValues = {
        description: "",
        title: "",
        status: "",
        subtasks: [{ title: "", isCompleted: false }]

        // subtasks: [""],
    };

    interface FieldProps {
        field: {
            name: string;
            value: any;
            onChange: (event: React.ChangeEvent<any>) => void;
            onBlur: (event: React.FocusEvent<any>) => void;
        };
        form: {
            touched: { [field: string]: boolean };
            errors: { [field: string]: string };
        };
        meta: {
            error?: string;
            touched?: boolean;
        };
    }

    const dispatch = useDispatch()



    return (
        <Modal
            disableAutoFocus
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Paper sx={{ ...style, color: 'white' }}>

                <Box sx={{ paddingY: "0.6rem" }}>
                    <Typography variant="h6" >
                        Add New Task
                    </Typography>
                </Box>


                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        // console.log(values);
                        dispatch(addTask(values))



                    }}>


                    {

                        (props: FormikProps<any>) => (



                            <Form>
                                <Field name="title">
                                    {
                                        ({ field, form: { touched, errors }, meta }: FieldProps) => (
                                            <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                <FormLabel sx={{ color: "white", fontWeight: 400, fontSize: "0.8rem" }}>Title</FormLabel>
                                                <StyledInputBase multiline rows={0} {...field} />
                                                <FormHelperText></FormHelperText>
                                            </FormControl>
                                        )
                                    }
                                </Field>

                                <Field name="description">


                                    {

                                        ({ field, form: { touched, errors }, meta }: FieldProps) => (
                                            <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                <FormLabel sx={{ color: "white", padding: "0.2rem", fontWeight: 400, fontSize: "0.8rem" }}>Description</FormLabel>
                                                <StyledInputBase multiline rows={2}
                                                    minRows={2} {...field} />
                                                <FormHelperText></FormHelperText>
                                            </FormControl>
                                        )
                                    }

                                </Field>



                                <FormControl fullWidth>
                                    <FormLabel sx={{ color: "white", padding: "0.2rem", fontWeight: 400, fontSize: "0.8rem" }}>Subtasks</FormLabel>

                                    <FieldArray name="subtasks">
                                        {
                                            (arrayProps) => {
                                                // console.log(arrayProps);
                                                const { push, remove, form } = arrayProps
                                                const { values } = form
                                                const { subtasks } = values

                                                // console.log(subtasks);


                                                return (
                                                    <>
                                                        <Box sx={{
                                                            maxHeight: "120px", overflowY: "scroll", padding: "0.5rem", '&::-webkit-scrollbar': {
                                                                width: 10,
                                                            }
                                                        }}>
                                                            {

                                                                subtasks.map((subtasks, index: number) => (
                                                                    <Stack direction="row" alignItems="center" my={0.2} key={subtasks.title}>
                                                                        <Field name={`subtasks.${index}.title`}>

                                                                            {

                                                                                ({ field, form: { touched, errors }, meta }: FieldProps) => (

                                                                                    <StyledInputBase
                                                                                        {...field} />


                                                                                )
                                                                            }

                                                                        </Field>
                                                                        <Box sx={{ marginX: "0.2rem" }}>
                                                                            <IconButton onClick={() => remove(index)} color="primary" aria-label="upload picture" component="label">
                                                                                <ClearIcon sx={{ color: "#7d899c" }} />
                                                                            </IconButton>
                                                                        </Box>

                                                                    </Stack>
                                                                ))

                                                            }
                                                        </Box>
                                                        <Button
                                                            fullWidth
                                                            sx={{ background: "white", color: "black", borderRadius: "2rem", marginTop: "0.8rem" }}
                                                            variant="contained"
                                                            onClick={() => push({ name: "", isCompleted: false })}

                                                        //   startIcon={}

                                                        >
                                                            Add Subtask
                                                        </Button>
                                                    </>
                                                )



                                            }
                                        }
                                    </FieldArray>

                                    <FormHelperText></FormHelperText>
                                </FormControl>


                                <Field name="status" as="select">
                                    {

                                        ({ field, form: { touched, errors }, meta }: FieldProps) => (

                                            <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                <FormLabel sx={{ color: "white", padding: "0.2rem", fontWeight: 400, fontSize: "0.8rem" }}>
                                                    Status
                                                </FormLabel>

                                                <Select
                                                    {...field}
                                                    // value={values.status}
                                                    // // onChange={handleChange}
                                                    // // onBlur={handleBlur}
                                                    input={<StyledInputBase />}
                                                >

                                                    {
                                                        ["Todo", "Doing", "Complete"].map((status) =>
                                                            (<MenuItem value={status} key={status}>{status}</MenuItem>))
                                                    }


                                                </Select>

                                            </FormControl>
                                        )
                                    }
                                </Field>

                                <Button
                                    variant="contained"
                                    type='submit'
                                    //   color="primary"
                                    //   startIcon={}
                                    fullWidth
                                    // onClick={() => {  }}
                                    sx={{
                                        borderRadius: "2rem",
                                        backgroundColor: "#635fc7",
                                        marginBlock: "1rem"
                                    }}

                                >
                                    Create Task
                                </Button>
                            </Form>
                        )
                    }

                </Formik>
            </Paper>


        </Modal >
    )
}

export default AddToTaslModa