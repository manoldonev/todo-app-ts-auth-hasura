import type { AppState } from '@auth0/auth0-react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './components';
import { Home, Login, NoMatch } from './routes';

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ returnTo: location.pathname }} replace />;
  }

  return children;
};

const Auth0StatusWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    toast.error(`Something went wrong: ${error.message}`);
  }

  return children;
};

const App = (): JSX.Element => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState): void => {
    navigate(appState.returnTo ?? window.location.pathname, { replace: true });
  };

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ''}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ''}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <>
        <Auth0StatusWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Auth0StatusWrapper>
        <Toaster />
      </>
    </Auth0Provider>
  );
};

export { App };
