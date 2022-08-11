import React from 'react'

function Functionclick() {
    function Clickhandler() {
        console.log('test');
    }
  return (
    <div><button onClick={Clickhandler}>Click</button></div>
  )
}

export default Functionclick