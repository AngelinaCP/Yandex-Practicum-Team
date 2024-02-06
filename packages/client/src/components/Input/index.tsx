import React, { FC } from 'react'
import { InputLabelStyle, InputStyle, InputWrapperStyle } from './style'
import { ErrorMessage } from './ErrorMessage'

interface InputProps {
  name: string
  label: string
  required: boolean
  type?: string
  value?: string
  errorMessages?: string[]
}

const Input: FC<InputProps> = ({
  label,
  name,
  required,
  type,
  value,
  errorMessages = [],
}) => (
  <InputWrapperStyle>
    <InputStyle
      type={type || 'input'}
      placeholder=""
      name={name}
      id={name}
      value={value}
      required={required}
    />
    <InputLabelStyle htmlFor="name">{label}</InputLabelStyle>
    {errorMessages.length > 0 &&
      errorMessages.map((e, i) => <ErrorMessage key={i}>{e}</ErrorMessage>)}
  </InputWrapperStyle>
)

export default Input
