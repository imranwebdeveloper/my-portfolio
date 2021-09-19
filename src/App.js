// import './App.css';
import MainSection from "./components/mainSection/MainSection";
import Menubar from "./components/menuBar/Menubar";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkNavy } from "./styled-components/theme";

function App() {
  return (
    <ThemeProvider theme={DarkNavy}>
      <Router>
        <Menubar />
        <MainSection />
      </Router>
    </ThemeProvider>
  );
}

export default App;
