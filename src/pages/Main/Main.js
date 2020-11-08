import React, { useState } from "react";

import { MainContainer } from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

import add from "../../global/assets/add.svg";

import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";

const schens = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function Main() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainContainer>
      <main>
        <h1>My Tasks</h1>
        <div>{}</div>
      </main>
      <a>
        <Fab onClick={handleClickOpen}>
          <img src={add}></img>
        </Fab>
      </a>
      <ThemeProvider theme={schens}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullScreen={fullScreen}
        >
          <DialogTitle id="form-dialog-title">Create</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontFamily: "" }}>
              Describe your task and add it to the panel
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=""
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" variant='contained'>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </MainContainer>
  );
}
