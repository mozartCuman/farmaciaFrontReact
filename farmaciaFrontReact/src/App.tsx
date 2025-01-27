import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

function app() {
  return(
    <>
      <Authprovider>
        <BrowserRouter>
        
        </BrowserRouter>
      </Authprovider>

    </>
  )
}
export default App
