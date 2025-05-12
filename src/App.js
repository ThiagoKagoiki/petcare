import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Pages/Login.jsx';
import { Home } from './Pages/Home.jsx';
import { PrivateRoute } from './Componentes/PrivateRoute.jsx';
import { DashBoard } from './Pages/Dashboard.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';


function App() {

  return (
    <>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={
            <PrivateRoute>

              <Home/>
            
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
      </AuthProvider>
    </>
  )
}

export default App