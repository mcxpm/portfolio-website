import {
  IconButton,
  Stack,
  Typography,
  Button,
  Box,
  useMediaQuery,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Container,
} from "@mui/material";
import PropTypes from "prop-types";

import { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";

const drawerLength = 240;
const listItems = ["About", "Experiences", "Projects", "Skills", "Contact"];

//TODO - Add scroll functionality
//TODO - Add darkmode functionality - incl save preferences etc
export default function NavBar() {
  const theme = useTheme();
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [curSection, setCurSection] = useState(0);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleScrollSection = (item) => {
    setDrawerOpen(false);
    const sectionId = item.toLowerCase();
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      const headerOffset = 100; // Set the offset value
      const elementPosition = sectionElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Mcxpm
      </Typography>
      <Divider />
      <List>
        {listItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleScrollSection(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <>
      {matches ? (
        <Box display="flex" justifyContent="center" width="100%">
          <Container
            maxWidth="xl"
            sx={{
              position: "fixed",
              zIndex: 9999,
              backgroundColor: "white",
              width: "100vw",
              top: 0,
            }}
            alignItems="center"
          >
            <Stack
              direction="row"
              my={2.0}
              component="nav"
              display="flex"
              alignItems="center"
            >
              <Stack>
                <Typography variant="h6" gutterBottom>
                  Mcxpm
                </Typography>
              </Stack>
              <Stack justifyContent="flex-end" ml="auto">
                <Box sx={{ display: { md: "block" } }}>
                  {listItems.map((item) => (
                    <Button
                      key={item}
                      sx={{ color: "#000", fontWeight: "500" }}
                      onClick={() => handleScrollSection(item)}
                      fontWeight={theme.typography.fontWeightLight}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
      ) : (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ m: 1, position: "fixed", bgcolor: "white", zIndex: 9999 }}
          >
            <Menu />
          </IconButton>
        </>
      )}
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerLength,
            },
            position: "fixed",
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
