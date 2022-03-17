import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Logo src="netflix_logo.png" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="?category=series">Series</Link>
        <Link to="?category=movie">Movies</Link>
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  height: 80px;
`;

const Logo = styled.img`
  width: 200px;
  height: 40px;
  margin: 16px 0;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  margin-left: 40px;
  align-items: center;

  & a {
    text-decoration: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
