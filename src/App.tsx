import './App.css';
import { useRef, useEffect } from 'react';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount (refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Home onCTAClick={handleCTAClick} />
      <div ref={resumeRef}>
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
