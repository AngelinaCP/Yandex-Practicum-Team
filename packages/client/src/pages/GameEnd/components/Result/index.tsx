import Result from './Result'

const result_ = '00:00:34'

export default ({ result = result_, ...props }) => (
  <Result {...props}>{result}</Result>
)
