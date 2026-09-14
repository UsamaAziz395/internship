import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import Projects from './Components/Projects/Projects.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/Aboutus.jsx';
import Services from './Components/Services/Services.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Home />}>
      
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />} />
      <Route path='/blog' element={<Blog />}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact />} />
   
     
    </Route>
  )
)

   
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   
  <RouterProvider router={router} />

  <App />



  </StrictMode>,
)


