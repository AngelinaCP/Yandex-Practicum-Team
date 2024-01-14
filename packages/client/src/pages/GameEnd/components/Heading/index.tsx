import Heading from './Heading'

const heading_ = 'Результат'

export default ({ heading = heading_, ...props }) => (
  <Heading {...props}>{heading}</Heading>
)
