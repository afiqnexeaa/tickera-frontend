import { createTheme } from "@mui/material";

const theme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#3A4D39",
        light: "#739072",
      },
      secondary: {
        main: "#ECE3CE",
      },
    },
  });
};

export default theme;
