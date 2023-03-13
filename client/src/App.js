import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
              </Route>
          </Routes>
        </AuthProvider>
      
    </div>
  );
}

export default App;
