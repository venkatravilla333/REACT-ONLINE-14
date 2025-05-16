
import App from "./App";

import ReactDom from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'

let div = document.getElementById('root')

let root = ReactDom.createRoot(div)

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)




