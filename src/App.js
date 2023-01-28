import React, { useState } from 'react'

const App = () => {
  return (
    <div>
<HOCRed cmp={Counter}/>
<HOCGreen cmp={Counter}/>

    </div>
  )
}

function HOCRed (props) {
  return(
    <div>
<h1 style={{backgroundColor:'red', width:'30%', margin : 'auto', textAlign:'center',padding:'10px'}}><props.cmp /></h1>
    </div>
  )
}
function HOCGreen (props) {
  return(
    <div>
<h1 style={{backgroundColor:'green', width:'30%', margin : 'auto', textAlign:'center',padding:'10px'}}><props.cmp /></h1>
    </div>
  )
}

function Counter () {
  const [s,sets] = useState(0)
  const update = () => {
sets(s+1)
  }
return(
  <div>
    <h1>{s}</h1>
    <button onClick={update}>Update</button>
  </div>
)
}

export default App