import styled from "styled-components";
import LogoImage from "../utils/images/logo.png";
import LoginImage from "../utils/images/loginImage.jpg";
import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: url(${LoginImage}) right bottom;
  background-size: cover;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 900px) {
    flex: 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 80px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 20px;
  }
`;

const Shade = styled.span`
  background-color: #ffffff91;
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <Left>
        <Logo src={LogoImage} />
      </Left>
      <Right>
        <Shade>
          {!login ? (
            <>
              <SignIn />
              <Text>
                Don't have an account?{" "}
                <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
              </Text>
            </>
          ) : (
            <>
              <SignUp />
              <Text>
                Already have an account?{" "}
                <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
              </Text>
            </>
          )}
        </Shade>
      </Right>
    </Container>
  );
};

export default Authentication;
