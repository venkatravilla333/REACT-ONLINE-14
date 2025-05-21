
import App from "./App";

import ReactDom from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import Parent from "./5.Performance/4.Virtual-Dom/Parent";

let div = document.getElementById('root')

let root = ReactDom.createRoot(div)

root.render(
  // <BrowserRouter>
  <App />
  // <Parent/>
  // </BrowserRouter>
)




