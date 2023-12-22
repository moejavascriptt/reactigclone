import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import AuthPage from './pages/Authpage/AuthPage'
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
