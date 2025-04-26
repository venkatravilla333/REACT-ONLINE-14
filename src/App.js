// import Jsx from './1.JSX/Jsx'
// import Parent from './2.Api-Calls/Parent'
// import A from './2.State/1.Local-State/1.Simple-Data/A'
// import Child from './Child'

// function App() {
//   var data1 = 'sachin'
//   var data2 = 'kohli'
//   return (
//     <div>
//       <h1>App com: {data1}, {data2 }</h1>
//       {
//         Child(data1)
//       }
//       {
//         Child(data2)
//       }
//     </div>
//   )
// }

// export default App

import React from "react"
import A from "./3.State/4.Global-State/2.Redux-Concept/React-Components/A"
// import A from "./3.State/4.Global-State/1.Context-Api/A"
// import Parent from "./2.Props/3.Child-to-Child/Parent"
// import A from "./3.State/3.Props-Drilling/A"
// import A from "./3.State/1.Local-State/1.Simple-Data/A"
// import Parent from "./2.Props/2.Child-to-Parent/Parent"

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'sachin'
    }
  }
  render() {
    return <div>
      {/* <h2>App com: {this.state.name}</h2> */}
      {/* {new Child().render()} */}
      {/* <Child name={this.state.name} /> */}
      {/* <Jsx/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      {/* <A/> */}
      {/* <A/> */}
      <A/>
    </div>
  }
}

export default App