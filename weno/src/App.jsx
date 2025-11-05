import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import Customers from './pages/Customers';
import { useState, useEffect } from 'react';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const toggleTheme = (mode) => setTheme(mode);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
      setCollapsed(false); // Always expand on mobile
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex h-screen w-screen overflow-hidden ${theme === 'dark' ? 'bg-[#1E1E2D] text-white' : 'bg-gray-50 text-black'}`}>
      {sidebarOpen && (
        <div className={`z-40 ${isMobile ? 'fixed inset-0' : 'static'} md:static md:z-auto`}>
          <Sidebar
            setSidebarOpen={setSidebarOpen}
            theme={theme}
            toggleTheme={toggleTheme}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isMobile={isMobile}
          />
        </div>
      )}
      <div className="flex flex-col flex-1 h-full w-full">
        <div className="w-full flex-shrink-0">
          <Topbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            pathname={location.pathname}
            theme={theme}
          />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide p-4 h-[calc(100vh-56px)] sm:h-auto w-full">
          <Routes>
            <Route path="/" element={<Dashboard theme={theme} />} />
            <Route path="/properties" element={<Properties theme={theme} />} />
            <Route path="/agents" element={<Agents theme={theme} />} />
            <Route path="/customers" element={<Customers theme={theme} />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
