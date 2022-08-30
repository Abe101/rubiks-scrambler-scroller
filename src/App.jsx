import React from "react";
import { Container, createStyles } from "@mantine/core";
import Sidebar from "./Components/Sidebar";
import Scrambles from "./Components/Scrambles";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },
  container: {
    width: "100vw",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  sidebar: {
    // flexShrink: 2,
  },
  main: {
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 20,
    minWidth: "100vw",
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size={"xl"} className={classes.container}>
        <Sidebar className={classes.sidebar} />
        <div className={classes.main}>
          <Scrambles />
        </div>
      </Container>
    </div>
  );
}

export default App;
