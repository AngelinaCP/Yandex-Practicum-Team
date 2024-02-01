import { FC } from 'react'
import { Spinner, SpinnerWrapper } from '@/components/Loading/styles'

export const LoaderSpinner: FC = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
)
