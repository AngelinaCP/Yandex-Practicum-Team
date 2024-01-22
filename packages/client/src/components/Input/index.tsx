import React, { FC } from 'react'
import { InputLabelStyle, InputStyle, InputWrapperStyle } from './style'

interface InputProps {
  name: string
  label: string
  required: boolean
  type?: string
}

const Input: FC<InputProps> = ({ label, name, required, type = undefined }) => (
  <InputWrapperStyle>
    <InputStyle
      type={type || 'input'}
      placeholder=""
      name={name}
      id={name}
      required={required}
    />
    <InputLabelStyle htmlFor="name">{label}</InputLabelStyle>
  </InputWrapperStyle>
)

export default Input
