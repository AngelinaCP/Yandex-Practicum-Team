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

    @media (prefers-color-scheme: dark) {
      background-color: ${props => props.theme.dark.buttonBackground};
      color: ${props => props.theme.dark.buttonColor};
      box-shadow: ${props => props.theme.dark.boxShadow};
      &:focus {
        box-shadow: ${props => props.theme.dark.focusBoxShadow};
      }

      &:hover {
        box-shadow: ${props => props.theme.dark.hoverBoxShadow};
      }

      &:active {
        box-shadow: ${props => props.theme.dark.activeBoxShadow};
      }
    }
  `

  StyledFileLabel.defaultProps = {
    theme: {
      dark: {
        buttonBackground: '#fcfcfd',
        buttonColor: '#36395a',
        boxShadow:
          '0px -3px 0px 0px ' +
          '#B5B5D8' +
          ' inset' +
          ', 0px 7px 13px -3px ' +
          'rgba(45, 33, 66, 0.4)' +
          ', 0px 3px 6px 0px ' +
          'rgba(255, 255, 255, 0.3)',
        focusBoxShadow:
          '0px 0px 0px 2px ' +
          '#B5B5D8' +
          ' inset' +
          ', 0px 7px 13px -3px ' +
          'rgba(45, 33, 66, 0.4)' +
          ', 0px 2px 4px 0px ' +
          'rgba(255, 255, 255, 0.3)' +
          ', 0px -3px 0px ' +
          '#B5B5D8' +
          ' inset',
        hoverBoxShadow:
          '0px -3px 0px 0px ' +
          '#B5B5D8' +
          ' inset' +
          ', 0px 7px 13px -3px ' +
          'rgba(45, 33, 66, 0.4)' +
          ', 0px 4px 8px 0px ' +
          'rgba(255, 255, 255, 0.3)',
        activeBoxShadow: '0px 3px 7px 0px ' + '#B5B5D8' + ' inset',
      },
      buttonBackground: '#fcfcfd',
      buttonColor: '#36395a',
      boxShadow:
        '0px -3px 0px 0px ' +
        '#D6D6E7' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.25)' +
        ', 0px 4px 4px 0px ' +
        'rgba(45, 35, 66, 0.25)',
      focusBoxShadow:
        '0px 0px 0px 2px ' +
        '#D6D6E7' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.25)' +
        ', 0px 2px 4px 0px ' +
        'rgba(45, 35, 66, 0.25)' +
        ', 0px -3px 0px ' +
        '#D6D6E7' +
        ' inset',
      hoverBoxShadow:
        '0px -3px 0px 0px ' +
        '#D6D6E7' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.4)' +
        ', 0px 4px 8px 0px ' +
        'rgba(45, 35, 66, 0.3)',
      activeBoxShadow: '0px 3px 7px 0px ' + '#D6D6E7' + ' inset',
    },
  }

  return (
    <StyledFileLabel>
      <StyledFileInput type="file" onChange={handleFileChange} />
      Выбрать Аватар
    </StyledFileLabel>
  )
}
