import { createBrowserRouter , RouterProvider}from 'react-router-dom'
import LeyOut from './LeyOut/LeyOut'


import Home from './Pages/Home/Home'

import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Error from './ErrorPage/Error'
import SkillsAndCertificates from './Pages/SkillsAndCertificates/SkillsAndCertificates'

function App() {
  const ReactRoter = createBrowserRouter([{
    path : '/',
    element : <LeyOut/>,
    children : [
      {path : '/', element : <Home/>},
      {path : 'About', element : <About/>},
      {path : 'SkillsAndCertificates', element : <SkillsAndCertificates/>},
      {path : 'Projects', element : <Projects/>},

    ] ,
    errorElement : <Error/>
  }])
  
  return <RouterProvider router={ReactRoter}/>
}

export default App
