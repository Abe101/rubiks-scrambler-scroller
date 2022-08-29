import React from "react";
import { Container } from "@mantine/core";
import Sidebar from "./Components/Sidebar";
import Scrambles from "./Components/Scrambles";

function App() {
  return (
    <Container>
      <Sidebar />
      <Scrambles />
    </Container>
  );
}

export default App;
