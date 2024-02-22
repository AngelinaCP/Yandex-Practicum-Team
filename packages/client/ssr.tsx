import App from './src/App'
import { renderToString } from 'react-dom/server'

export function render() {
  //<Provider store={store}
  //StaticRouter
  return renderToString(<App />)
}
