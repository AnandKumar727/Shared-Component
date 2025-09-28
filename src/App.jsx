import React, { useState } from 'react'
import Drawer from './Components/Shared/Drawer'
import Button from './Components/Shared/Button'
import Card from './Components/Shared/Card'
function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='p-16'>
     <h1>You can design your own Model</h1>
    </div>
  )
}

export default App