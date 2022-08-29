import React from "react";
import {
  createStyles,
  Navbar,
  Group,
  ThemeIcon,
  ScrollArea,
  Text,
} from "@mantine/core";
import { Icon3dCubeSphere } from "@tabler/icons";

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

export default function Sidebar() {
  const { classes } = useStyles();

  function getRandomCubeColors() {
    const idx = Math.floor(Math.random() * 3);
    return cubeColors[idx];
  }

  return (
    <Navbar height={800} width={150} p={"md"} className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group>
          <ThemeIcon
            size={"lg"}
            variant={"gradient"}
            gradient={getRandomCubeColors()}
          >
            <Icon3dCubeSphere size={20} />
          </ThemeIcon>
          <Text size={"xl"} weight={700} className={classes.title}>
            Rubiks Scrambler Scroller
          </Text>
        </Group>
      </Navbar.Section>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}></div>
      </Navbar.Section>
      <Navbar.Section className={classes.footer}></Navbar.Section>
    </Navbar>
  );
}
