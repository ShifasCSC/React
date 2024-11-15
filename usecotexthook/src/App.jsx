import React, { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [data,setData]=useState ("synnefo")

//   return (
//     <>
//      <h1>parent {data}</h1>
//     <Comp1 saata={data}/>
//     </>
//   )
// }

// export default App

// function Comp1(props){
//   return(
//     <>
//     <h2>component 1</h2>
//     <Comp2 maata={props.saata}/>
//     </>
//   )
// }

// function Comp2({maata}){
//   return(
//     <>
//     <h2>component 2</h2>
//    <Comp3 lata={maata}/>
//     </>
//   )
// }

// function Comp3({lata}){
//   return(
//     <>
//     <h2>component 3</h2>
//     <Comp4 naata={lata}/>
//     </>
//   )
// }

// function Comp4({naata}){
//   return(
//     <>
//     <h2>component 4 {naata}</h2>
//     </>
//   )
// }
//-----------in this above code we dont use useContext hook so this code became complicated we cannot directly give the data to the component we acess the child and its children and so on-----------------------

//-----------------use context hook below mentioned---------------

// import { useContext } from 'react'

const UserContext=React.createContext()

function apps(){
  const [inst,setInst]=useState("whre is component?")
  return(
    <>
    <UserContext.Provider value={inst}>



    <h1>parent </h1>
    <Comp1/>
    </UserContext.Provider>
    </>
  )

}
export default apps

function Comp1(){
  return(
    <>
    <h2>Component 1</h2>
    <Comp2/>
    </>
  )
}

function Comp2(){
  return(
    <>
    <h2>Component 2</h2>
    <Comp3/>
    </>
  )
}

function Comp3(){
  return(
    <>
    <h2>Component 3</h2>
    <Comp4/>
    </>
  )
}

function Comp4(){
  const user=useContext(UserContext)  
  return(
    <>
    <h2>Component 4 {user}</h2>
    </>
  )
}

