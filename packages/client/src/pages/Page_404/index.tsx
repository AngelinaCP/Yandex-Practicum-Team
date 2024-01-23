import React from 'react'
import Link from '@/components/Link'
import { StyledError } from '@/pages/Page_404/style'

export const Page404 = () => (
  <StyledError>
    <span>404</span>
    <span>не туда попали</span>
    <Link to="/">вернуться на главную</Link>
  </StyledError>
)
