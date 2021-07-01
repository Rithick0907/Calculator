import { Row, Col } from "react-bootstrap";
import StyledMain from "./Main.styles";

const Main = ({ clearValue, setOperation, setValue, setResult, value }) => {
  return (
    <StyledMain fluid>
      <Row>
        <Col xs={{ span: 12 }}>{value}</Col>
      </Row>
      <Row>
        <Col xs={{ span: 6 }} onClick={clearValue}>
          AC
        </Col>
        <Col xs onClick={() => setOperation("%")}>
          %
        </Col>
        <Col xs onClick={() => setOperation("/")}>
          /
        </Col>
      </Row>
      <Row>
        <Col xs onClick={() => setValue(7)}>
          7
        </Col>
        <Col xs onClick={() => setValue(8)}>
          8
        </Col>
        <Col xs onClick={() => setValue(9)}>
          9
        </Col>
        <Col xs onClick={setOperation("*")}>
          *
        </Col>
      </Row>
      <Row>
        <Col xs onClick={() => setValue(4)}>
          4
        </Col>
        <Col xs onClick={() => setValue(5)}>
          5
        </Col>
        <Col xs onClick={() => setValue(6)}>
          6
        </Col>
        <Col xs onClick={setOperation("-")}>
          -
        </Col>
      </Row>
      <Row>
        <Col xs onClick={() => setValue(1)}>
          1
        </Col>
        <Col xs onClick={() => setValue(2)}>
          2
        </Col>
        <Col xs onClick={() => setValue(3)}>
          3
        </Col>
        <Col xs onClick={() => setOperation("+")}>
          +
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 6 }} onClick={() => setValue(0)}>
          0
        </Col>
        <Col xs={3}>.</Col>
        <Col className="last" onClick={setResult} xs={3}>
          =
        </Col>
      </Row>
    </StyledMain>
  );
};
export default Main;
