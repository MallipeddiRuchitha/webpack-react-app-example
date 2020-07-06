import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3a456b", // We can directly give colors in # without importing.
    },
    secondary: {
      main: "#ffffff",
    },
    myColor: {
      redColor: "#f10e41",
      blackColor: "#000",
      greenColor: "#3bb7ab",
    },
  },
  typography: {
    h4:{
      fontWeight: "20px",
      fontSize: "30px",
    },
    h5:{
      fontWeight: "15px",
      fontSize: "20px",
    },

    button: {
      fontSize: "13px",
      textAlign: "center",
      color: "#fff",
      fontStyle: "bold",
      fontFamily: "poppins",
      fontWeight: "10px",
    },
  },
});
