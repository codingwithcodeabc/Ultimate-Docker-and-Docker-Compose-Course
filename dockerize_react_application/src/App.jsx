import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="">
      <h2>Code ABC</h2>
      <p>-Shahjalal Rafi</p>
      <p style={{border: "2px solid red", padding: '10px 8px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum repudiandae at temporibus repellendus eum recusandae veniam deserunt placeat hic iste nesciunt, corrupti quaerat fuga, architecto dolorum corporis, quasi explicabo praesentium?</p>
     </div>
    </>
  )
}

export default App
