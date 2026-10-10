import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/login/login';
import Main from './components/main/main';
import Employee from "./components/employee/employee";
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Main />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/recruitment" element={<Employee />} />
          <Route path="/attendance" element={<Employee />} />
          <Route path='/leave' element={<Employee />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;