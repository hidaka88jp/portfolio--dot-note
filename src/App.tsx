import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Features from './pages/Features';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/features" element={<Features />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App