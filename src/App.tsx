import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Features from './pages/Features';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <meta name='theme-color' content={isDarkMode ? '#3B523A' : '#F3F4EC'} />
      <meta name='description' content='awesome note app' />
      <header>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className='dark:bg-bg-base-dark -mb-px'>
        <Routes>
          <Route path='/' element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path='/features'
            element={<Features isDarkMode={isDarkMode} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <footer className='dark:bg-bg-base-dark'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
