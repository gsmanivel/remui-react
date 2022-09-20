
import { Button } from "@mui/material";
import { Container, ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import "./App.css";
import theme from "./styles/theme";
import Appbar from "./components/appbar";

function App() {
  useEffect(() => {
    document.title = "React Material UI";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar/>
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
