// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import ChangeInput from './ChangeInput'
import Counter from './Counter'
import Liked from './Liked'
import NameChanger from './NameChanger'
import ShowHide from './ShowHide'
function App() {


  return (
    <>
     <Counter/>
     <div>
      <ChangeInput/>
     </div>
     <div>
      <NameChanger/>
     </div>
     <div>
      <ShowHide/>
     </div>
     <div>
      <Liked/>
     </div>
    </>
  )
}

export default App
