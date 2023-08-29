import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../Pages/Context'; // استيراد السياق

function PrivateRoute({ element, ...rest }) {
  const { isLoggedIn } = useAuth(); // استخدام الحالة من السياق

  return <Route {...rest} element={isLoggedIn ? element : <Navigate to="/login" />} />;
}

export default PrivateRoute;
