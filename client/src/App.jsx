import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theams";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.3s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const [isDarkTheam, setIsDarkTheam] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheam ? darkTheme : lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar
              setIsDarkTheam={setIsDarkTheam}
              isDarkTheam={isDarkTheam}
              currentUser={currentUser}
            />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
            </Routes>
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
