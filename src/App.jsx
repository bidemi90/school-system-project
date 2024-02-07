import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import Test from './Components/Test';
import Musicplayerhome from './Components/Musicplayer/Musicplayerhome';
import Musicuploader from './Components/Musicplayer/Musicuploader';
import Musicplaylists from './Components/Musicplayer/Musicplaylists';


function App() {
  const [count, setCount] = useState(0)

  return (
    
  <Routes>
    <Route path='test' element={<Test/>}></Route>
    <Route path="musicplayer/*" element={<Musicplayerhome/>}></Route>
    <Route path='musicupload' element={<Musicuploader/>}></Route>
    <Route path='musicplaylists' element={<Musicplaylists/>}></Route>
  </Routes>
  )
}

export default App
