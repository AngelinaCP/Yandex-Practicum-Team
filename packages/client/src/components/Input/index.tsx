import { ChangeEventHandler, FC } from 'react'
import { InputLabelStyle, InputStyle, InputWrapperStyle } from './style'

interface InputProps {
  name: string
  label: string
  required: boolean
  type?: string
  value?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({
  label,
  name,
  required,
  type,
  value,
  disabled,
  onChange,
}) => (
  <InputWrapperStyle>
    <InputStyle
      type={type || 'input'}
      placeholder=""
      name={name}
      id={name}
      value={value}
      required={required}
      disabled={disabled}
      onChange={onChange}
    />
    <InputLabelStyle htmlFor="name">{label}</InputLabelStyle>
  </InputWrapperStyle>
)

export default Input
