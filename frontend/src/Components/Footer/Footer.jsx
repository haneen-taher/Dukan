import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import "./Footer.css";
import Logo from "../../Images/logonew.png";
import { HashLink } from "react-router-hash-link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(164, 212, 155, 1), rgba(117, 200, 182, 1))#f7e8b9",
      }}
      className={classes.footer}
    >
      <Container className={classes.inner}>
      <div id="logo-logo">
        <HashLink smooth to="/Home#" className="Logo-footer">
        <span id="Logo-footer-log">دُكان</span>
        </HashLink>
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <a href="src\Components\Product\Product.jsx">تسوق</a>
          <a href="src\Components\Home\Aboutus\Aboutus.jsx">من نحن</a>
          <a href="src\Components\Contactus\Contactus.jsx">تواصل معنا</a>
        </div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter
              size="1.05rem"
              stroke={1.5}
              style={{ color: "rgba(255, 225, 106, 1)" }}
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube
              size="1.05rem"
              stroke={1.5}
              style={{ color: "rgba(255, 225, 106, 1)" }}
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram
              size="1.05rem"
              stroke={1.5}
              style={{ color: "rgba(255, 225, 106, 1)" }}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
