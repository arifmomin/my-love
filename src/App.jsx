import React from 'react'
import Welcome from './WelcomePage/Welcome';
import { ToastContainer } from 'react-toastify';
import Home from './Home/Home';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter (createRoutesFromElements(
    <Route>
      <Route path='/' element= {<Welcome/>}></Route>
      <Route path='/our-love' element={<Home/>}></Route>
    </Route>
  ))
  return (
    <>
      <ToastContainer/>
     <RouterProvider router={router}/>
    </>
  )
}

export default App