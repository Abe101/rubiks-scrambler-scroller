import React from "react";
import { Container, createStyles } from "@mantine/core";
import Sidebar from "./Components/Sidebar";
import Scrambles from "./Components/Scrambles";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  sidebar: {
    flexShrink: 2,
  },
  main: {
    flexGrow: 1,
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Sidebar className={classes.sidebar} />
        <Scrambles className={classes.main} />
      </div>
    </Container>
  );
}

export default App;
