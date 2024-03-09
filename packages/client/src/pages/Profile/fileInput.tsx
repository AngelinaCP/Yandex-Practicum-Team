import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface FileInputProps {
  onFileChange: (file: File | null) => void
}

export const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onFileChange(file)
  }

  const StyledFileInput = styled.input`
    display: none;
  `
  const StyledFileLabel = styled.label`
    background-color: ${props => props.theme.buttonBackground};
    color: ${props => props.theme.buttonColor};
    position: relative;
    display: inline-flex;
    overflow: hidden;
    height: 48px;
    width: 200px;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
    align-items: center;
    appearance: none;
    cursor: pointer;
    touch-action: manipulation;
    border-radius: 4px;
    border-width: 0;
    font-family: 'horror', monospace;
    font-size: 18px;
    letter-spacing: 2px;
    white-space: nowrap;
    line-height: 1;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    will-change: box-shadow, transform;
    box-shadow: ${props => props.theme.boxShadow};

    &:focus {
      box-shadow: ${props => props.theme.focusBoxShadow};
    }

    &:hover {
      box-shadow: ${props => props.theme.hoverBoxShadow};
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: ${props => props.theme.activeBoxShadow};
      transform: translateY(2px);
    }
  `

  return (
    <StyledFileLabel>
      <StyledFileInput type="file" onChange={handleFileChange} />
      Выбрать Аватар
    </StyledFileLabel>
  )
}
