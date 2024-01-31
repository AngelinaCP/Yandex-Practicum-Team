import { FC } from 'react'
import { Spinner, SpinnerWrapper } from '@/components/Loading/styles'

export const Loading: FC = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
)
