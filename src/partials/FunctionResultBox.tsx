import { Card, Col, Row } from 'react-bootstrap'
import { LogicFunction, LogicFunctionListItem } from '../functions'
import { BooleanBox } from './BooleanBox'

interface FunctionResultBoxProps {
  selectedFunc?: LogicFunctionListItem
  negation: boolean
}

const arrayOfBoolean = [true, false]

export const FunctionResultBox = ({ selectedFunc, negation }: FunctionResultBoxProps): JSX.Element | null => {
  if (undefined === selectedFunc) {
    return null
  }

  const func: LogicFunction = negation
    ? (a, b) => !selectedFunc.func(a, b)
    : selectedFunc.func

  const title = negation ? `!(${selectedFunc.name})` : selectedFunc.name

  const resultBox = arrayOfBoolean.map((a, indexA) => {
    const row = arrayOfBoolean.map((b, indexB) => <BooleanBox key={indexB} value={func(a, b)}/>)
    row.unshift(<Col>a: {String(a)}</Col>)
    return <Row key={indexA}>
      {row}
    </Row>
  })

  return <Card>
    <Card.Body>
      <Card.Title>
       {title}
      </Card.Title>
      <Card.Text>
        <Row>
          <Col/>
          <Col>b: true</Col>
          <Col>b: false</Col>
        </Row>
        {resultBox}
      </Card.Text>
    </Card.Body>
  </Card>
}
