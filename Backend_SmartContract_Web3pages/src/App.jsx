import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Project from './views/Project'
import Landing from './views/Landing'
// import Footer from "./pagecomponents/Footer";
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [ setLoaded] = useState(false)

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])

  return (
    <div className="">
      
      {/* {loaded ? (
        
      ) : null} */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* <Footer/> */}
    </div>
  )
}

export default App
