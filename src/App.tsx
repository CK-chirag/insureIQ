import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/landingPage';
import MainAuth from './components/LoginSignUp/main';
import Dashboard from './components/DashBoard/dashboard';

function App() {
  const DashboardHome = () => <div>Dashboard Home</div>;
  const DashboardPage1 = () => <div>Dashboard Page 1</div>;
  const DashboardPage2 = () => <div>Dashboard Page 2</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboard" element={<MainAuth />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="page1" element={<DashboardPage1 />} />
          <Route path="page2" element={<DashboardPage2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
