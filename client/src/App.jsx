import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theams";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 02s ease;
`;

function App() {
  const [user, setUser] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {user ? (
          <Container>
            <Navbar/>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
