

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import EmployeeManager from './components/EmployeeManager';
import DepartmentManager from './components/DepartmentManager';
import LandingPage from './components/LandingPage';
import { SunIcon, MoonIcon, UsersIcon, BuildingOfficeIcon, Bars3Icon, XMarkIcon, ArrowUturnLeftIcon } from './components/icons';

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const NavItem = ({ to, icon, children }: { to: string; icon: React.ReactNode; children?: React.ReactNode }) => {
    const fullPath = `/dashboard${to === '/' ? '' : to}`;
    const isActive = location.pathname === fullPath;
    return (
      <NavLink
        to={fullPath}
        onClick={() => setIsSidebarOpen(false)}
        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'bg-primary dark:bg-dark-primary text-primary-foreground dark:text-dark-primary-foreground'
            : 'text-muted-foreground dark:text-dark-muted-foreground hover:bg-accent dark:hover:bg-dark-accent hover:text-accent-foreground dark:hover:text-dark-accent-foreground'
        }`}
      >
        {icon}
        <span className="ml-3">{children}</span>
      </NavLink>
    );
  };

  const Sidebar = () => (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary dark:bg-dark-secondary border-r border-border dark:border-dark-border transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex-shrink-0`}>
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-16 px-4 border-b border-border dark:border-dark-border">
                <h1 className="text-xl font-bold text-foreground dark:text-dark-foreground">EmpTrack</h1>
                 <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-muted-foreground dark:text-dark-muted-foreground">
                    <XMarkIcon className="h-6 w-6" />
                </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <NavItem to="/" icon={<BuildingOfficeIcon className="h-5 w-5" />}>Departments</NavItem>
                <NavItem to="/employees" icon={<UsersIcon className="h-5 w-5" />}>Employees</NavItem>
            </nav>
        </div>
    </aside>
  );

  const Header = () => (
    <header className="relative flex items-center justify-center h-16 px-4 md:px-6 bg-secondary dark:bg-dark-secondary border-b border-border dark:border-dark-border">
        <div className="absolute left-4 flex items-center">
            <button onClick={() => navigate('/')} className="p-1 mr-2 rounded-md text-muted-foreground dark:text-dark-muted-foreground hover:bg-accent dark:hover:bg-dark-accent" aria-label="Back to landing page">
                <ArrowUturnLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-muted-foreground dark:text-dark-muted-foreground">
                <Bars3Icon className="h-6 w-6" />
            </button>
        </div>
        <h2 className="text-lg font-semibold text-center text-foreground dark:text-dark-foreground">Employee Records Management</h2>
    </header>
  );

  return (
    <div className="flex h-screen bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground">
      {isDashboard && <Sidebar />}
      <div className="flex flex-col flex-1 min-w-0">
          {isDashboard && <Header />}
          <main className="flex-1 overflow-y-auto">
              <div className={isDashboard ? "p-4 md:p-6" : ""}>
                <Routes>
                    <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/dashboard" element={<DepartmentManager />} />
                    <Route path="/dashboard/employees" element={<EmployeeManager />} />
                </Routes>
              </div>
          </main>
      </div>
      {isDashboard && isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/50 md:hidden"></div>}
    </div>
  );
};

const App = () => (
  <HashRouter>
    <AppContent />
  </HashRouter>
);

export default App;