import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from "../App";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";

let theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    background: {
      secondary: "#0D0D0D",
    },
    mode: "light",
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <MantineProvider>
        <Notifications />
        <App />
      </MantineProvider>
    </ThemeProvider>
  </>
);
