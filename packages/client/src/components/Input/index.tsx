import React, { FC, ReactNode } from 'react'
import { InputLabelStyle, InputStyle, InputWrapperStyle } from './style'

interface InputProps {
  name: string
  required: boolean
  type?: string
}

const Input: FC<InputProps> = ({ name, required, type = undefined }) => (
  <InputWrapperStyle>
    <InputStyle
      type={type || 'input'}
      placeholder=""
      name={name}
      id={name}
      required={required}
    />
    <InputLabelStyle htmlFor="name">{name}</InputLabelStyle>
  </InputWrapperStyle>
)

export default Input
