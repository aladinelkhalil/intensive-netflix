import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Logo src="netflix_logo.png" />
      <Nav>
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
        </ul>
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
  align-items: center;
  margin-left: 40px;

  & ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }

  & li {
    color: rgb(218, 218, 218);
    list-style-type: none;
  }
`;
