import CharacterEditor from "./components";
import { createTheme } from "@mui/material";
import defaultTemplates from "./data/base_models";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GPRoute } from "./components/GlobalProvider";


const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#de2a5e",
    },
  },
});

const EditComponent = () => (
  <CharacterEditor templates={defaultTemplates} theme={defaultTheme} />
)

function App() {
  return (
    <Router>
        <Switch>
          <GPRoute path="/" exact component={EditComponent} />
        </Switch>
      </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)