import React from 'react';
import { NavLink, Route, Routes } from 'react-router';

export const App: React.FC = () => {
  return (
    <div>
      <div>
        <NavLink style={{ marginRight: 8 }} to="/">
          Home
        </NavLink>
        <NavLink style={{ marginRight: 8 }} to="/login">
          Login
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<h1>Hello World!</h1>} />
        <Route path="/login" element={<h1>You can login here</h1>} />
      </Routes>
    </div>
  );
};
