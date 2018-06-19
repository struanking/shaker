import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  
  & > li {
    padding: 0.5rem 0;
  }
  
  & > li + li {
    border-top: solid 1px #eee;
  }
`;

export default List;
