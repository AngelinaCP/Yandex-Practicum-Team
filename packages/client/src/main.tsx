import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
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
        color: #2d323d;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
    }

    #root {
        height: 100vh;
        width: 100vw;
    }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
)
