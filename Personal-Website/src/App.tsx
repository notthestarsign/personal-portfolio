import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Landing from '@/pages/Landing';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Resume from '@/pages/Resume';
import About from '@/pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
