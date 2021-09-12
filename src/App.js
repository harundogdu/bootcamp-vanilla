import MainContainer from "./components/MainContainer";
import { ThemeProvider } from "./components/Contexts/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <MainContainer />
    </ThemeProvider>
  );
};

export default App;
