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
import Controlled from "./11.Refs/Controlled"
import Uncontrolled from "./11.Refs/Uncontrolled"
// import Variables from "./10.Nv vs Sv vs Rv/Variables"
// import Input from "./11.Refs/Refer-Dom-Element/Input"
// import Timer from "./11.Refs/Refer-Value/Timer"
// import Count1 from "./5.Performance/3.How-to-remove-duplicate-logic/Count1"
// import Count2 from "./5.Performance/3.How-to-remove-duplicate-logic/Count2"
// import Count3 from "./5.Performance/3.How-to-remove-duplicate-logic/Count3"
// import Home from "./12.Routing/Home"
// import Parent from "./12.Routing/Parent"
// import Controlled from "./11.Refs/Controlled"
// import A from "./3.State/Async-Data/4.Global-State/4.Redux-Toolkit/React-Components/A"
// import A from "./3.State/Async-Data/4.Global-State/2.Context-Api-useReducer/A"
// import A from "./3.State/Async-Data/4.Global-State/3.Redux-Concept/React-Components/A"
// import A from "./3.State/Async-Data/4.Global-State/2.Context-Api-useReducer/A"
// import A from "./3.State/Async-Data/4.Global-State/1.Context-Api-useState/A"
// import A from "./3.State/Async-Data/1.Local-State/2.Complex-Data/A"
// import Parent from "./9.Side-Effects/5.Api-Calls (get-request)/Parent"
// import A from "./3.State/Async-Data/1.Local-State/1.Simple-Data/A"
// import Parent from "./9.Side-Effects/3.Runs-Only-Once/Parent"
// import Container from "./9.Side-Effects/4.Cleanup-Task/Container"
// import Parent from "./9.Side-Effects/2.Runs-Conditionally/Parent"
// import Parent from "./9.Side-Effects/1.Default-Behaviour/Parent"
// import Parent from "./8.Portals/Parent"
// import SignUp from "./7.CSS/3.Modules/SignUp"
// import Login from "./7.CSS/3.Modules/Login"
// import Parent from "./7.CSS/Css-BasedOn-Condition/Parent"
// import Parent from "./6.Map(loop-array)/Parent"
// import Inline from "./7.CSS/1.Inline/Inline"
// import Login from "./7.CSS/2.Style-Sheet/Login"
// import SignUp from "./7.CSS/2.Style-Sheet/SignUp"
// import Parent from "./5.Performance/1.Conditional-Rendering/Parent"
// import Parent from "./5.Performance/2.Fragment/Parent"
// import A from "./3.State/4.Global-State/2.Context-Api-useReducer/A"
// import Parent from "./4.Destructuring/Parent"
// import Parent from "./3.State/1.Local-State/2.Complex-Data/Parent"
// import A from "./3.State/4.Global-State/3.Redux-Toolkit/React-Components/A"
// import A from "./3.State/4.Global-State/2.Redux-Concept/React-Components/A"
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
    return <React.Fragment>
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
      {/* <A/> */}
      {/* <A/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Inline/> */}
      {/* <SignUp/>
      <Login/> */}
      {/* <SignUp />
      <Login/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Container/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      {/* <A/> */}
      {/* <A/> */}
      {/* <A/> */}
      {/* <Variables/> */}
      {/* <Input/> */}
      {/* <Timer/> */}
      {/* <Count1 />
      <Count2 />
      <Count3/> */}
      {/* <Parent/> */}
      <Controlled />
      <Uncontrolled/>
    </React.Fragment>
  }
}

export default App