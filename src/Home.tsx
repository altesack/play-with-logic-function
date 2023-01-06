import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LogicFunctionListItem } from './functions'
import { FunctionResultBox } from './partials/FunctionResultBox'
import { SelectFunctionBox } from './partials/SelectFunctionBox'

export const Home = (): JSX.Element => {
  const [selectedFunc, setSelectedFunc] = useState<LogicFunctionListItem>()
  const [negation, setNegation] = useState(false)

  return (
      <Container>
        <Row>
          <Col>
            <h1>Playing with logic functions</h1>
          </Col>
        </Row>
        <SelectFunctionBox
          selectedFunc={selectedFunc}
          setSelectedFunc={setSelectedFunc}
          negation={negation}
          setNegation={setNegation}
        />
        <FunctionResultBox
          selectedFunc={selectedFunc}
          negation={negation}
        />
      </Container>
  )
}
