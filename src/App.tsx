import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Features from './pages/Features';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
