import { Alert, Col } from 'react-bootstrap'

interface BooleanBoxProps {
  value: boolean
}
export const BooleanBox = ({ value }: BooleanBoxProps): JSX.Element => {
  const variant = value ? 'success' : 'danger'

  return <Col>
    <Alert variant={variant}>{String(value)}</Alert>
  </Col>
}
