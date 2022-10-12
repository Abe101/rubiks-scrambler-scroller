import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { scrollSpy, Events, animateScroll } from "react-scroll";

import { stopScrambling } from "../Redux/modules/scrambler";

const useStyles = createStyles((theme) => ({
  paper: {},
}));

export default function Scrambles() {
  const dispatch = useDispatch();
  const { classes, theme } = useStyles();
  const scrambling = useSelector((state) => state.scrambler.scrambling);
  const [scrambles, setScrambles] = React.useState([]);

  React.useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
      dispatch(stopScrambling());
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [dispatch]);

  React.useEffect(() => {
    if (scrambling) {
      scrollToBottom();
    }
  }, [scrambling]);

  const runScrambles = () => {
    const allScrambles = [...scrambles];
    for (let i = 0; i < 11; i++) {
      const scramble = cubeScrambler().scramble();
      allScrambles.push(scramble);
    }
    setScrambles(allScrambles);
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      smooth: "linear",
      isDynamic: true,
      duration: 30000,
    });
  };

  const items = scrambles.map((scramble, idx) => (
    <Text
      key={idx}
      component={"pre"}
      size={"lg"}
      color={
        theme.colorScheme === "dark"
          ? theme.colors.gray[0]
          : theme.colors.dark[9]
      }
      style={{ marginTop: 350, marginBottom: 350 }}
    >
      {scramble.join("  ")}
    </Text>
  ));

  return (
    <Center>
      <Paper p={"md"} shadow={"sm"} className={classes.paper}>
        <ScrollArea type={"hover"}>
          <InfiniteScroll
            pageStart={0}
            loadMore={runScrambles}
            hasMore={scrambles.length < 100}
            loader={<Loader color={"indigo"} />}
          >
            {items}
          </InfiniteScroll>
        </ScrollArea>
      </Paper>
    </Center>
  );
}
