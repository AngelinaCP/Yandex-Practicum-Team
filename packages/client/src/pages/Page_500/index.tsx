import React from 'react'
import Link from '@/components/Link'
import { StyledError } from '@/pages/Page_500/style'

const Page404 = () => (
  <StyledError>
    <span>500</span>
    <span>мы уже фиксим</span>
    <Link to={'/'}>вернуться на главную</Link>
  </StyledError>
)

export default Page404
