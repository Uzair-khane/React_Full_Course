import  { useState} from 'react'

export default function ShowHide () {
  const [show,setShow] = useState(true)
  function toggle(){
    setShow(!show)
  }
        return (
            <div>
                {show && <p>This is some hidden text</p>}
                <button onClick={toggle}>{show ? "Hide":"show"}</button>
            </div>
        )
  
}
