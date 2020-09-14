import React from 'react';
import './App.css';
import { AuthContextProvider } from "./components/context/AuthContextProvider"
import Register from './components/Register';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Register />
     </div>
    </AuthContextProvider>
  );
}

export default App;
