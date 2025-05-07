import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Features from './pages/Features';
import NotFound from './pages/NotFound';
import AppMetaTags from './components/AppMetaTags';
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
      <AppMetaTags isDarkMode={isDarkMode} />
      <header>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className='dark:bg-bg-base-dark'>
        <Routes>
          <Route path='/' element={<Home isDarkMode={isDarkMode} />} />
          <Route path='/features' element={<Features />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
