import { Button, Col, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'
import { functions, LogicFunctionListItem } from '../functions'

interface SelectFunctionBoxProps {
  selectedFunc?: LogicFunctionListItem
  setSelectedFunc: (f: LogicFunctionListItem) => void
  negation: boolean
  setNegation: (n: boolean) => void
}

export const SelectFunctionBox = ({ selectedFunc, setSelectedFunc, negation, setNegation }: SelectFunctionBoxProps): JSX.Element => {
  const options = functions.map((func) => (
    <Button
      key={func.name}
      onClick={() => setSelectedFunc(func)}
      variant={func.name === selectedFunc?.name ? 'primary' : 'secondary'}
    >
      {func.name}
    </Button>
  ))

  return (<>
    <Row>
    <Col>
    <FormCheckInput
      id='negation'
      onChange={(e) => setNegation(e.target.checked)}
      checked={negation}
    />
    <FormCheckLabel htmlFor='negation'>negation</FormCheckLabel>
    </Col>
  </Row>
  <Row>
      <Col>
        {options}
      </Col>
  </Row>
  </>)
}
