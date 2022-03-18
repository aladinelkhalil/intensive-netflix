import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "components/common/SearchBox";

interface Props {
  searchQuery: string;
  onSearch: (searchQuery: string) => void;
}

function Navbar({ searchQuery, onSearch }: Props) {
  return (
    <Container>
      <Link to="/">
        <Logo src="netflix_logo.png" />
      </Link>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/?category=series">Series</Link>
        <Link to="/?category=movie">Movies</Link>
      </Nav>
      <SearchBox value={searchQuery} onChange={onSearch} />
      <AdminLink to="/admin">Admin login</AdminLink>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 2fr 1fr;
  align-items: center;
  height: 80px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 80px 40px;
    margin-bottom: 64px;
  }
`;

const AdminLink = styled(Link)`
  @media (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 40px;
  margin: 16px 8px;

  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
  }
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

  @media (max-width: 500px) {
    margin-left: 16px;
    margin-right: 16px;
    column-gap: 4px;
    grid-column: 2;
    grid-row: 1;
  }
`;
