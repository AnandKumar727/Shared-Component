import Form from "./Components/Shared/Form"
import Input from "./Components/Shared/Input"
import Button from './Components/Shared/Button'
import Card from './Components/Shared/Card'

const App = ()=>{
  return(
  <div className="gr-gray-300 flex items-center justify-center h-screen">
    <div className="w-4/12">
    <Card title="Register Now">
      <Form>
        <div className="space-y-5">
          <Input 
          name='first-name'
          type="text"
          placeholder='Firstname'
          />

          <Input 
          name='last-name'
          type="text"
          placeholder='Lastname'
          />

          <Input 
          name='email'
          type="email"
          placeholder='email'
          />

          <Button type="secondary" icon='login-circle-line'>Login</Button>
        </div>
      </Form>
    </Card>
    </div>
  </div>
  )
}
export default App