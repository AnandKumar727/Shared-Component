import React from 'react'
import Button from './Components/Shared/Button'
function App() {
  return (
    <div className='p-16 flex gap-10'>
      <Button type='primary' icon='arrow-right-up-line'>Register Now</Button>
      <Button type='secondary' icon={'login-circle-line'}>Login</Button>
      <Button type='danger'>Error</Button>
      <Button type='warning'>Limited sheet</Button>
      <Button type='success' icon={'edit-2-line'}>Edit Now</Button>
      <Button type='danger'>Hello</Button>
    </div>
  )
}

export default App