import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Your other theme configuration options here

  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#0277bd", // light blue
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 640,
      inBetw: 750,
      md: 900,
      hard: 940,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Segoe UI", // Set your desired font family
    fontSize: 15, // Set the default font size
    fontWeightLight: 300, // Set the light font weight
    fontWeightRegular: 400, // Set the regular font weight
    fontWeightMedium: 550, // Set the medium font weight
    fontWeightBold: 700, // Set the bold font weight
    fontSizeHeader: 30,
    subtitle1: {
      lineHeight: 1.3,
      fontSize: "0.8rem",
      fontStyle: "italic",
      fontWeight: "400",
    },
    header1: {
      lineHeight: 1,
      fontSize: "2.1rem",
      fontFamily: "Segoe UI",
      fontWeight: "500",
    },
    descriptions: {
      lineHeight: 1.2,
      fontSize: "0.9rem",
      fontFamily: "Segoe UI",
      fontWeight: "350",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
