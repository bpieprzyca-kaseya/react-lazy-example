import React, { Suspense } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import LoginPage from './LoginPage'

const ProtectedPage = React.lazy(() => import('./ProtectedPage'))

export default function App() {
  return (
    <>
      <h1>Auth Example</h1>

      <p>
        This example demonstrates a simple login flow with two pages: 
        a protected page, and a login page. In order to see the protected
        page, you must first login.
      </p>

      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Suspense>
                <ProtectedPage />
                </Suspense>
              </RequireAuth>
            }
          />
      </Routes>
    </>
  );
}

function RequireAuth({ children }) {
  let auth = localStorage.getItem('auth-token-test');
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

