import React from "react";
import cubeScrambler from "cube-scrambler";
import InfiniteScroll from "react-infinite-scroller";
import {
  createStyles,
  Text,
  Paper,
  Center,
  ScrollArea,
  Loader,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  paper: {},
}));

export default function Scrambles() {
  const { classes, theme } = useStyles();
  const [scrambles, setScrambles] = React.useState([]);

  const runScrambles = () => {
    const allScrambles = [...scrambles];
    for (let i = 0; i < 11; i++) {
      const scramble = cubeScrambler().scramble();
      allScrambles.push(scramble);
    }
    setScrambles(allScrambles);
  };

  //   React.useEffect(() => {}, []);

  const items = scrambles.map((scramble, idx) => (
    <Text
      key={idx}
      size={"lg"}
      color={
        theme.colorScheme === "dark"
          ? theme.colors.gray[0]
          : theme.colors.dark[9]
      }
      style={{ marginTop: 250, marginBottom: 250 }}
    >
      {scramble.join(" ")}
    </Text>
  ));

  console.log(scrambles);

  return (
    <Center>
      <Paper p={"md"} shadow={"sm"} className={classes.paper}>
        <ScrollArea type={"hover"}>
          <InfiniteScroll
            pageStart={0}
            loadMore={runScrambles}
            hasMore={scrambles.length < 500}
            loader={<Loader color={"indigo"} />}
            useWindow={true}
          >
            {items}
          </InfiniteScroll>
        </ScrollArea>
      </Paper>
    </Center>
  );
}
