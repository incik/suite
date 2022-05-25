import { Editor, Frame, Element } from "@craftjs/core";
import "./App.css";

/* function App() {
  return (
    <div className="App bg-slate-200">
      <div className=" container mx-auto">
        <div className="bg-slate-600 text-white rounded-b-xl border-t-2 border-red-400">
          <div className="flex p-4 items-end">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold">SUITE</h1>
              <em className="text-xs">
                Shoptet's Ultimate Interactive Template Editor
              </em>
            </div>
          </div>
        </div>
        <Editor resolver={{ Text }}>
          <Frame></Frame>
        </Editor>
      </div>
    </div>
  );
} */

import { Typography, Paper, Grid, makeStyles } from "@material-ui/core";

import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";
import { Topbar } from "./components/Topbar";

import { Container } from "./components/user/Container";
import { Button } from "./components/user/Button";
import { Card, CardTop, CardBottom } from "./components/user/Card";
import { Text } from "./components/user/Text";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography style={{ margin: "20px 0" }} variant="h5" align="center">
        Basic Page Editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#eeeeee"
                data-cy="root-container"
              >
                <Card data-cy="frame-card" />
                <Button text="Click me" size="small" data-cy="frame-button" />
                <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
                <Element
                  canvas
                  is={Container}
                  padding={6}
                  background="#999999"
                  data-cy="frame-container"
                >
                  <Text
                    size="small"
                    text="It's me again!"
                    data-cy="frame-container-text"
                  />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}

export default App;
