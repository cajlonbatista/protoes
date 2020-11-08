import React from "react";

import {
  Button,
  createMuiTheme,
  ThemeProvider,
  Paper,
  IconButton,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

import back from "../../global/assets/arrow.svg";

import { AddContainer } from "./styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#565656",
    },
  },
});

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  add = () => {
    var todos = localStorage.getItem("@welcome-kentaurus/data");
    var newtodo = [];
    if (this.state.task == "") {
    } else {
      if (todos != null) {
        newtodo = JSON.parse(todos);
        newtodo.push(this.state.task);
        localStorage.setItem(
          "@welcome-kentaurus/data",
          JSON.stringify(newtodo)
        );
        this.setState({
          task: "",
          message: "Sucess",
        });
      } else {
        var todo = [];
        todo.push(this.state.task);
        localStorage.setItem("@welcome-kentaurus/data", JSON.stringify(todo));
      }
    }
  };
  render() {
    return (
      <AddContainer>
        <Paper style={{ padding: "10px 14px", width: "80vw", display: "flex" }}>
          <Link to="/">
            <IconButton onClik={this.remove}>
              <img src={back}></img>
            </IconButton>
          </Link>
          <input
            value={this.state.task}
            onChange={(e) => {
              this.setState({ task: e.target.value });
            }}
            placeholder="Add your tasks here"
          ></input>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color="primary" onClick={this.add}>
              Add
            </Button>
          </ThemeProvider>
        </Paper>
      </AddContainer>
    );
  }
}
