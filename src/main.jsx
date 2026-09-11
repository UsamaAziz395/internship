import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home/Home.jsx";
import Projects from './Components/Projects/Projects.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Components/About/Aboutus.jsx';
import Services from './Components/Services/Services.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='services' element={<Services />} />
      <Route path='blog' element={<Blog />}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact />} />
   
     
    </Route>
  )
)
   
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <RouterProvider router={router} />
   <Home />

  </StrictMode>,
)
