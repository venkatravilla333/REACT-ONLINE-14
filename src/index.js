
import App from "./App";

import ReactDom from 'react-dom/client'

let div = document.getElementById('root')

let root = ReactDom.createRoot(div)

root.render(new App().render())




