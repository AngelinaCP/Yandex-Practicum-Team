import { ResultStyled } from './ResultStyled'

const result_ = '00:00:34'

export const Result = ({ result = result_ }) => (
  <ResultStyled>{result}</ResultStyled>
)
