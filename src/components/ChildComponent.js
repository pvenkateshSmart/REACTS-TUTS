import React from 'react'

function ChildComponent(props) {
  return (
    // <div><button onClick={props.greethandelr}>Greet Parent</button></div>
    <div><button onClick={()=>props.greethandelr('Child')}>Greet Parent</button></div>
  )
}

export default ChildComponent