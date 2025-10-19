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
import AdminRoute from './pages/admin/AdminRoute';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminData from './pages/admin/Data';
import AdminSettings from './pages/admin/Settings';
import AdminLayout from './pages/admin/AdminLayout';

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

          {/* Admin routes */}
          <Route
            path="admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="data" element={<AdminData />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

