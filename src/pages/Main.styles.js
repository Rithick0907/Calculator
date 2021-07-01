import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledMain = styled(Container)`
  height: 100vh;
  font-size: 1.5rem;

  .row {
    min-height: 16.6%;
  }
  .col-12 {
    background-color: #858694;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 3rem;
  }
  .col,
  .col-6,
  .col-3 {
    background-color: rgb(239, 239, 239);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    cursor: pointer;
  }

  .col:nth-child(4),
  .last {
    background-color: #f5923e;
  }
`;

export default StyledMain;
