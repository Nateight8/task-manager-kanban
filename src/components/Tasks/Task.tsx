import { updateTask } from "@/redux/features/taskSlice";
import { Subtask, Task } from "@/utils/interface";
import {
  Backdrop,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Paper,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  Button,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FieldArray,
} from "formik";

type Props = {
  task: Task;
};

function Task({ task }: Props) {
  const [open, setopen] = useState(false);

  const listTextStyle = {
    color: "white",
    paddingY: "1rem",

    ".MuiListItemText-secondary": {
      color: "#818ea3",
      paddingTop: "0.8rem",
      fontSize: "0.8rem",
    },
    ".MuiListItemText-primary": { color: "", fontSize: "1rem", opacity: 0.8 },
  };

  const { title, description, subtasks } = task;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#2b2c37",
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setState({
  //         ...state,
  //         [event.target.name]: event.target.checked,
  //     });
  // };

  const dispatch = useDispatch();
  console.log(subtasks);

  return (
    <>
      <ListItem disableGutters>
        <Button
          fullWidth
          onClick={() => {
            setopen(true);
          }}
          sx={{
            background: "rgba(43,44,55,0.7)",
            "&:hover": { background: "#2b2c37", transform: "scale(1.01)" },
            textAlign: "left",
            paddingLeft: "1.25rem",
          }}
        >
          <ListItemText
            sx={listTextStyle}
            primary={title}
            secondary={`0 of ${subtasks.length} tasks`}
          />
        </Button>
      </ListItem>

      <Modal
        disableAutoFocus
        open={open}
        onClose={() => {
          setopen(false);
        }}
        closeAfterTransition
      >
        <Paper sx={{ ...style, color: "white" }}>
          <>
            <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
              {title}
            </Typography>
            {description ? (
              <ListItemText
                sx={{ ...listTextStyle, paddingY: 0 }}
                secondary={description}
              />
            ) : null}

            <Formik
              initialValues={{ isCompleted: false }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props: FormikProps<any>) => (
                <Form>
                  <FormControl fullWidth component="fieldset">
                    <FormLabel
                      component="legend"
                      sx={{ color: "white", paddingY: "1rem" }}
                    >
                      Subtasks ( 0 of {subtasks.length} ){" "}
                    </FormLabel>
                    <FormGroup sx={{ paddingLeft: "0.5rem" }}>
                      {subtasks.map((subtask, idx) => {
                        const { isCompleted, title } = subtask;
                        console.log(subtask);

                        return (
                          <Field key={idx}>
                            {({ field, form }: FieldProps) => {
                              // console.log(field.value);

                              return (
                                <FormControlLabel
                                  label={
                                    <Typography
                                      fontSize={14}
                                      variant="body1"
                                      // sx={subtask.isCompleted ? { textDecoration: "line-through", color: "#818EA3" } : { color: "white" }}
                                    >
                                      {title}
                                    </Typography>
                                  }
                                  control={
                                    <Checkbox
                                      value=""
                                      // checked={field.value.isCompleted}
                                      onChange={(event) => {
                                        form.setFieldValue(
                                          "isCompleted",
                                          event.target.checked
                                        );
                                      }}
                                      // color="primary"
                                    />
                                  }
                                />
                              );
                            }}
                          </Field>
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                  <Box sx={{ paddingY: "1.25rem", paddingRight: "1REM" }}>
                    <Typography variant="body1">Current Status</Typography>

                    <Button
                      disableRipple
                      disableFocusRipple
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: "rgba(130,143,163,0.4)",
                        color: "white",
                        justifyContent: "start",
                        textTransform: "capitalize",
                        marginTop: "0.6rem",
                        "&:hover": { borderColor: "#828fa3", color: "white" },
                      }}
                    >
                      Todo
                    </Button>
                  </Box>

                  <Box sx={{ paddingY: ".5rem", paddingRight: "1rem" }}>
                    <Button variant="contained" fullWidth type="submit">
                      Update Status
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </>
        </Paper>
      </Modal>
    </>
  );
}

export default Task;
