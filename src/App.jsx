import React, { useState } from 'react'
import Drawer from './Components/Shared/Drawer'
import Button from './Components/Shared/Button'
import Card from './Components/Shared/Card'
function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='p-16'>
      <Button type='secondary' onClick={()=>setOpen(true)}></Button>
      <Drawer
      open={open}
      close={()=>setOpen(false)}
      title='Sign In'
      >
        <Card title='Register Now'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusantium commodi maxime qui ad quidem incidunt et illo! Commodi exercitationem quod quia repudiandae possimus laudantium velit voluptatibus architecto consectetur ab.
        </Card>
      </Drawer>
    </div>
  )
}

export default App