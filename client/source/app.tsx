import React from 'react';

export type AppProps = {
  name: string;
};

export const App: React.FC<AppProps> = (props) => {
  return <h1>Hello {props.name}!</h1>;
};
