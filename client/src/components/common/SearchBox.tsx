import styled from "styled-components";

interface Props {
  value: string;
  onChange: (searchQuery: string) => void;
}

function SearchBox({ value, onChange }: Props) {
  return (
    <Container>
      <i id="search" className="fa-solid fa-magnifying-glass" />
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Netflix"
      />
      <i
        id="clear"
        className="fa-solid fa-xmark"
        onClick={() => onChange("")}
      />
    </Container>
  );
}

export default SearchBox;

const Container = styled.div`
  position: relative;
  width: 200px;
  grid-column: 4;

  & i#search {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  & i#clear {
    position: absolute;
    top: 8px;
    right: 16px;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  height: 32px;
  outline: none;
  background-color: transparent;
  padding-left: 32px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 4px;
`;
