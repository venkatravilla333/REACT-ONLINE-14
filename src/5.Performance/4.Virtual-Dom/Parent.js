import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
import HeavyCal from './HeavyCal'
import ListRendering from './ListRendering'

function Parent() {
  var [count, setCount] = useState(0)

  //state values

  var [num, setNum] = useState(0)
  var [name, setName] = useState({value: 'sachin'})
  var [nums, setNums] = useState([1,2,3])
  // var [fun, setFun] = useState(()=>{})
  // var [names, setNames] = useState([{name:'kohli',age: 30}, {name: 'sachin', age: 40}, {name: 'kalyan', age: 50}])
  
  //Inline values

  // var inlinenum = 100
  // var inlineobj = {value: 100}
  // var inlinearr = [1,2,3]
  // var inlinefun = ()=>{}
  
  //computed values 

  // var computedNum = num + 1
  // var computedObj = {id: 1, name: name.value}
  // var computedArr = [...nums, 'dhoni' ]
  // var computedFun = ()=>{console.log('computed fun', name.value)}

  //memoized values (preserve referece)

  // var memoObj = useMemo(()=> ({id: 1, name: name.value}), [name.value])
  // var memoArr = useMemo(()=> [...nums], [nums])
  // var memoFun = useCallback(()=>  console.log('computed fun', name.value), [name.value])
  
  // var filterRes = names.filter((obj) => {
  //   return obj.age <= 40
  // })

  // var memoRes = useMemo(()=>names.filter((obj) => {
  //   return obj.age <= 40
  // }), [names[1].age])
    
    
  console.log('parent render')

  let updateCount = () => {
    setCount(count+1)
  }

  let updateNum = () => {
    setNum(num+1)
  }

  let updateName = () => {
    setName((preValue) => ({
      ...preValue,
     age: 40
    }))
  }

  var updateNums = () => {
    setNums([...nums, 4,5])
  }

  var memoize = useCallback(() => {
    setNums([...nums, 4,5])
  }, nums)

  return (
    <div>
      {/* <h2>Count: {count}</h2>
      <button onClick={updateCount}>update count</button> */}
      {/* <Child num={num} /> */}
      {/* <Child name={name} /> */}
      {/* <Child nums={nums} /> */}
      {/* <Child fun={fun} /> */}
      
      {/* <Child num={inlinenum} /> */}
      {/* <Child obj={inlineobj} /> */}
      {/* <Child arr={inlinearr} /> */}
      {/* <Child fun={inlinefun} /> */}
      {/* <Child num={computedNum} /> */}
      {/* <Child obj={computedObj} /> */}
      {/* <Child arr={computedArr} /> */}
      {/* <Child fun={computedFun} /> */}

      {/* <Child obj = {memoObj} /> */}
      {/* <Child arr = {memoArr} /> */}
      {/* <Child fun = {memoFun} /> */}
      {/* <Child res = {filterRes} /> */}
      {/* <Child res = {memoRes} /> */}
      {/* <h2>Num: {num}</h2> */}
      {/* <button onClick={updateNum}>update num</button> */}
      {/* <Child num={num} /> */}
      {/* <h2>Name: {name.value}</h2> */}
      {/* <button onClick={updateName}>update name</button> */}
      {/* <Child obj={name} /> */}
      {/* <h2>Nums: {nums}</h2>
      <button onClick={updateNums}>update nums</button>
      <Child nums={nums} /> */}
      {/* <Child nums = {updateNums} /> */}
      {/* <Child nums = {memoize} /> */}
      {/* <HeavyCal/> */}
      <ListRendering/>
    </div>

  )
}

export default Parent