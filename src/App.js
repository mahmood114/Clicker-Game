import './App.css';
import {useState} from "react";
import Building from './components/Building';
import Click from './components/Click';
import { Footer, GlobalStyle, ThemeButton } from './styles';
import {ThemeProvider} from "styled-components";


function App() {

// Theme
  const theme = {
    dark: {
      mainColor: "white",
      backgroundColor: "#15202B",
    },
    light: {
      mainColor: "black",
      backgroundColor: "white",

    }
  }

//  States
  const [points, setPoints] = useState(0);
  const [perSecondIncrement, setPerSecondIncrement] = useState(0);
  const [perClickIncrement, setPerClickIncrement] = useState(1);
  const [currentTheme, setCurrentTheme] = useState("dark");

// Button handlers
  const changeTheme = () => currentTheme==="light"? setCurrentTheme("dark") : setCurrentTheme("light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={changeTheme}>{currentTheme==="light"? "Dark" : "Light"} mode</ThemeButton>
      <Click points={points} setPoints={setPoints} perClickIncrement={perClickIncrement} perSecondIncrement={perSecondIncrement}/>
      <Building points={points} setPoints={setPoints} perSecondIncrement={perSecondIncrement} setPerSecondIncrement={setPerSecondIncrement} perClickIncrement={perClickIncrement} setPerClickIncrement={setPerClickIncrement}></Building>
      <Footer>
        <p>Copyright &copy; 2021 Sayed Mahmood Almohri</p>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
