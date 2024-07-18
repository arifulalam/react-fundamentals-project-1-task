/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NabBar from './components/navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import TaskViewer from './pages/TaskViewer'

import { Helmet, HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import MasterPage from './layout/MasterPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MasterPage/>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/tasks" element={<TaskViewer />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}

export default App
