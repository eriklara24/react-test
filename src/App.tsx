import React from 'react';
import { Link, Route, Routes, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

import {
  Employees,
  Login
} from './views';

function App() {
  const user = useSelector((state: any) => state.user);

  const getRoutes = () => {
    if (user.token) {
      return (
        <>
          <Route path='/' element={<>Home C:</>} />
          <Route path='/employees' element={<Employees />}/>
        </>
      );
    }
  };

  const getNav = () => {
    if (user.token) {
      return (
        <>
          <li><Link to ='/employees'> Employees</Link></li>
        </>
      );
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            {getNav()}
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={<EmptyLayout />}>
          <Route index element={<Navigate to='/signin/no-route' replace={true} />} /> */}
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<Navigate to={user.loggedIn ? '/' : '/login'} replace={true} />} />
          {getRoutes()}
        </Routes>
      </main>
    </div>
  );
}

export default App;
