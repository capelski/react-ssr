import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router';

export type AppProps = {
  loading?: boolean;
  userNames?: string[];
};

const Home: React.FC<AppProps> = (props) => {
  const [loading, setLoading] = useState(props.loading ?? true);
  const [userNames, setUserNames] = useState(props.userNames ?? []);

  useEffect(() => {
    if (!props.userNames) {
      fetch('/api/user-names')
        .then((response) => response.json())
        .then((userNames) => {
          setLoading(false);
          setUserNames(userNames);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <h1>Hello World!</h1>

      {loading && <p>Loading...</p>}

      <div>
        {userNames.map((userName, index) => {
          return <p key={index}>{userName}</p>;
        })}
      </div>
    </React.Fragment>
  );
};

export const App: React.FC<AppProps> = (props) => {
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
        <Route path="/" element={<Home {...props} />} />
        <Route path="/login" element={<h1>You can login here</h1>} />
      </Routes>
    </div>
  );
};
