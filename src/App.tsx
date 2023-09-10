import * as React from 'react';
import { LandForm } from './components/LandForm';
import { Login } from './components/Login';

function App() {
  const [authToken, setAuthToken] = React.useState('');

  if (!authToken)
    return (
      <div className='min-h-screen grid place-content-center'>
        <Login setToken={setAuthToken} />
      </div>
    );

  return (
    <div className='container max-w-5xl my-8'>
      <LandForm />
    </div>
  );
}

export default App;
