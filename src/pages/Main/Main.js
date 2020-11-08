import React, { useState, useEffect } from "react";

import { MainContainer } from "./styles";
import {
  createMuiTheme,
} from "@material-ui/core/styles";
import {  orange } from "@material-ui/core/colors";

import remove from '../../global/assets/remove.svg';
import add from "../../global/assets/add.svg";

import {
  Fab,
  IconButton,
} from "@material-ui/core";
import Feed from "../../components/Feed/Feed";
import { Link } from "react-router-dom";

const schens = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function Main() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    var strofy = localStorage.getItem("@welcome-kentaurus/data");
    if (strofy != null) {
      var todo = JSON.parse(strofy);
      setData(todo);
    }
  }, data);

  const destroy = (e) => {
    
  }
  return (
    <MainContainer>
      <main>
        <h1>My Tasks</h1>
      </main>
      <section>
        {data.map((i) => {
          return (
            <div>
              <p key={i}>{i}</p>
              <IconButton key={i} onClick={(event) => { 
                  var todos = localStorage.getItem("@welcome-kentaurus/data");
                  var newtodo = [];
                  newtodo = JSON.parse(todos);
                  console.log(newtodo);
                  console.log(i);
                  var cleartodo = [];
                  for (const s in newtodo) {
                    if(newtodo[s] == i){
                      
                    }else{
                      cleartodo.push(newtodo[s]);
                    }
                  }
                  localStorage.setItem("@welcome-kentaurus/data", JSON.stringify(cleartodo));
                  setData(cleartodo);
               }}>
                <img src={remove}></img>
              </IconButton>
            </div>
          )
        })}
      </section>
      <Link to="/add">
        <Fab>
          <img src={add}></img>
        </Fab>
      </Link>
    </MainContainer>
  );
}
