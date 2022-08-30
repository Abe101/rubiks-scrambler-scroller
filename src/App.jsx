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
    flexGrow: 1,
    minWidth: "calc(100vw - 350px)",
  },
}));

function App() {
  const { classes, theme } = useStyles();
  console.log(theme.colorScheme);
  return (
    <div>
      <Container size={"xl"} className={classes.container}>
        <Sidebar className={classes.sidebar} />
        <Scrambles className={classes.main} />
      </Container>
    </div>
  );
}

export default App;
