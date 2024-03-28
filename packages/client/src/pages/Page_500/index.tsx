import React from 'react'
import Link from '@/components/Link'
import { StyledError } from '@/pages/Page_500/style'

export const Page500 = () => (
  <StyledError>
    <span>500</span>
    <span>мы уже фиксим</span>
    <Link reloadDocument to="/">
      вернуться на главную
    </Link>
  </StyledError>
)
