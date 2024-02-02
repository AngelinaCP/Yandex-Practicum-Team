import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import styled, { createGlobalStyle } from 'styled-components'

import App from './App'
import SLNTHLC from './assets/fonts/SLNTHLC.ttf'
import SLNTHLE from './assets/fonts/SLNTHLE.ttf'
import SLNTHLN from './assets/fonts/SLNTHLN.ttf'
import horror from './assets/fonts/horror.ttf'
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

    @font-face {
        font-family: "Silent Hill";
        src: url(${SLNTHLC}) format('truetype'), url(${SLNTHLE}) format('truetype'), url(${SLNTHLN}) format('truetype');
    }

    @font-face {
        font-family: "horror";
        src: url(${horror}) format('truetype');
    }

    body {
        font-family: "horror", monospace;
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
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalWrapper>
  </React.StrictMode>
)
