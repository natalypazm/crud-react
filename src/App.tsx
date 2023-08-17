import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './users/components/CreateNewUser'
import { ListOfUsers } from './users/components/ListOfUsers'

function App() {
  return (
    <>
    <CreateNewUser/>
    <ListOfUsers/>
    <Toaster richColors/>
    </>
  )
}

export default App
