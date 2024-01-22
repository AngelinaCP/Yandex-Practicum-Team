import React from 'react'
import ReactDOM from 'react-dom/client'
import styled, { createGlobalStyle } from 'styled-components'
import App from './App'
import './index.css'

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        font-family: "JetBrains Mono", monospace;
        font-size: 18px;
        line-height: 24px;
        font-weight: normal;
        font-style: normal;
        color: #36395A;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
    }

    #root {
        height: 100vh;
        width: 100vw;
    }
`

const GlobalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.dark.backgroundColor};
  }
`

GlobalWrapper.defaultProps = {
  theme: {
    dark: {
      backgroundColor: '#37363F',
    },
    backgroundColor: '#FFFFFF',
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <GlobalWrapper>
      <App />
    </GlobalWrapper>
  </React.StrictMode>
)
