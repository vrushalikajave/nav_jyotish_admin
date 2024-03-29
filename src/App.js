
import React from 'react';
import DashboardPage from './pages/DashboardPage';
import UserPage from './pages/UserPage';
import SignInPage from './pages/SignIn';
import PrivateRoute from './routes/privateRoute';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="user" element={<PrivateRoute Component={UserPage} />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;


