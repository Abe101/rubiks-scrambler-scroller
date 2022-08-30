import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStyles,
  Navbar,
  Group,
  ThemeIcon,
  ScrollArea,
  Text,
  Button,
} from "@mantine/core";
import {
  Icon3dCubeSphere,
  IconPlayerPlay,
  IconPlayerStop,
} from "@tabler/icons";

import { startScrambling, stopScrambling } from "../Redux/Modules/scrambler";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[5]
        : theme.colors.orange[7],
    filter: "drop-shadow(0 0 0.9rem crimson)",
  },
}));

const cubeColors = [
  { from: "red.7", to: "orange.7" },
  { from: "yellow.7", to: "gray.0" },
  { from: "blue.7", to: "green.7" },
];

function getRandomCubeColors() {
  const idx = Math.floor(Math.random() * 3);
  return cubeColors[idx];
}

export default function Sidebar() {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const scrambling = useSelector((state) => state.scrambler.scrambling);
  const [iconColorCombo, setIconColorCombo] = React.useState({});

  React.useEffect(() => {
    setIconColorCombo(getRandomCubeColors());
  }, []);

  function ScramblingButton({ state }) {
    if (state) {
      return (
        <Button
          leftIcon={<IconPlayerStop />}
          variant='gradient'
          gradient={{ from: "orange", to: "red" }}
          onClick={() => dispatch(stopScrambling())}
        >
          Stop Scrambling
        </Button>
      );
    } else {
      return (
        <Button
          leftIcon={<IconPlayerPlay />}
          variant='gradient'
          gradient={{ from: "teal", to: "lime" }}
          onClick={() => dispatch(startScrambling())}
        >
          Start Scrambling
        </Button>
      );
    }
  }

  return (
    <Navbar
      height={800}
      width={{ base: 350, xs: 350, sm: 350, md: 350, lg: 350, xl: 350 }}
      p={"md"}
      className={classes.navbar}
    >
      <Navbar.Section className={classes.header}>
        <Group>
          <ThemeIcon size={"lg"} variant={"gradient"} gradient={iconColorCombo}>
            <Icon3dCubeSphere size={20} />
          </ThemeIcon>
          <Text size={"xl"} weight={700} className={classes.title}>
            Rubiks Scrambler Scroller
          </Text>
        </Group>
      </Navbar.Section>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          <ScramblingButton state={scrambling} />
        </div>
      </Navbar.Section>
      <Navbar.Section className={classes.footer}></Navbar.Section>
    </Navbar>
  );
}
