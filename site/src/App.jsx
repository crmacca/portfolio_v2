import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing';
import CustomCursor from './components/cursor';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    }
  ]);

  return (
    <div className={`relative transition duration-700 min-h-screen min-w-full dark`}>
      <CustomCursor />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
