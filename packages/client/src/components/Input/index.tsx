import React, { FC } from 'react'
import { InputLabelStyle, InputStyle, InputWrapperStyle } from './style'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
  name: string
  label: string
  required?: boolean
  type?: string
  register?: UseFormRegister<any>
}

const Input: FC<InputProps> = ({
  label,
  name,
  required,
  type = undefined,
  register,
}) => (
  <InputWrapperStyle>
    <InputStyle
      type={type || 'input'}
      placeholder=""
      name={name}
      id={name}
      register={register ? register(name) : null}
      required={required ?? false}
    />
    <InputLabelStyle htmlFor="name">{label}</InputLabelStyle>
  </InputWrapperStyle>
)

export default Input
