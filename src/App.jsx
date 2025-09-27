import Button from './Components/Shared/Button'
import Card from './Components/Shared/Card'
function App() {
  return (
    <div className='p-16 grid grid-cols-2 gap-10'>
    <Card 
    title='Dashboard'
    footer = {
      <Button type='warning'>Edit</Button>
    }
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, cum. Nam, animi libero modi natus error nobis quasi accusamus vitae iste sit harum laboriosam eius iure voluptates, quis recusandae nisi.
    </Card>
    <Card 
    title='Profile'
    footer = 'Hello I am Footer'
    >Here is my Content</Card>
    </div>
  )
}

export default App