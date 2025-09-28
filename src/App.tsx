import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layout components
import MainLayout from './components/layout/MainLayout';

// Pages
import HomePage from './pages/Home';
import InvestorDashboard from './pages/investor/Dashboard';
import StartupExplore from './pages/startup/Explore';
import StartupDetail from './pages/startup/Detail';
import PreferencesPage from './pages/investor/Preferences';
import FoundersPage from './pages/founder/FoundersPage';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import NotFoundPage from './pages/NotFound';
import FounderProfilePage from './pages/founder/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes without main layout */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Routes with main layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Public routes */}
          <Route index element={<HomePage />} />
          
          {/* Investor routes */}
          <Route path="investor">
            <Route path="dashboard" element={<InvestorDashboard />} />
            <Route path="preferences" element={<PreferencesPage />} />
            <Route path="opportunities" element={<StartupExplore />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Startup routes */}
          <Route path="startup">
            <Route path="explore" element={<StartupExplore />} />
            <Route path=":id" element={<StartupDetail />} />
            <Route index element={<Navigate to="explore" replace />} />
          </Route>
          
          {/* Founder routes */}
          <Route path="for-founders" element={<FoundersPage />} />
          <Route path="founder/profile" element={<FounderProfilePage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

