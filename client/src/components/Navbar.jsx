import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import { Link as LinkR, NavLink } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";

const Nav = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: relative;
  z-index: 1050;
`;

const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Logo = styled.img`
  height: 42px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transform: scale(1.5);
`;

const BrandName = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
`;

const Mobileicon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;
  @media screen and (max-width: 930px) {
    display: flex;
    align-items: center;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const UserContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  padding: 0 6px;
  padding-left: 40px;
  @media screen and (max-width: 930px) {
    padding-left: 6px;
  }
  color: ${({ theme }) => theme.primary};
`;

const TextButton = styled.div`
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenu = styled.ul`
  display: none;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  margin: 0px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  @media screen and (max-width: 930px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <FlexDiv>
          <Mobileicon onClick={() => setIsOpen(!isOpen)}>
            <MenuRounded sx={{ color: "inherit" }} />
          </Mobileicon>
          <NavLogo to="/">
            <Logo src={LogoImg} />
            <BrandName>Fitness-Tracker</BrandName>
          </NavLogo>
        </FlexDiv>

        <FlexDiv>
          <NavItems>
            <li>
              <Navlink to="/">Dashboard</Navlink>
            </li>
            <li>
              <Navlink to="/workouts">Workouts</Navlink>
            </li>
            <li>
              <Navlink to="/tutorials">Tutorials</Navlink>
            </li>
            <li>
              <Navlink to="/blogs">Blogs</Navlink>
            </li>
            <li>
              <Navlink to="/contact">Contact</Navlink>
            </li>
          </NavItems>

          <UserContainer>
            <Avatar></Avatar>
            <TextButton>Logout</TextButton>
          </UserContainer>
        </FlexDiv>
      </NavContainer>
      <MobileMenu isOpen={isOpen}>
        <li>
          <Navlink to="/">Dashboard</Navlink>
        </li>
        <li>
          <Navlink to="/workouts">Workouts</Navlink>
        </li>
        <li>
          <Navlink to="/tutorials">Tutorials</Navlink>
        </li>
        <li>
          <Navlink to="/blogs">Blogs</Navlink>
        </li>
        <li>
          <Navlink to="/contact">Contact</Navlink>
        </li>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
