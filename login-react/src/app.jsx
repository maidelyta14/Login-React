import { useSelector } from 'react-redux';
import LoginPage from './features/auth/pages/LoginPage';
import DashboardPage from './features/auth/pages/DashboardPage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app">
      {isAuthenticated ? <DashboardPage /> : <LoginPage />}
    </div>
  );
}

export default App;

