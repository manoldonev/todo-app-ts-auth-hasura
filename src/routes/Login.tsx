import { useAuth0 } from '@auth0/auth0-react';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Button } from '../components';

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
`;

const LoginButton = styled(Button)`
  flex: 0 0 auto;
  flex-direction: column;
  margin-bottom: 10rem;
`;

const Login = (): JSX.Element => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <h1>Todo App</h1>
        <FontAwesomeIcon size="10x" icon={faTasks} style={{ flex: '1 1 auto', marginBottom: 'auto' }} />
      </LogoWrapper>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access  */}
      <LoginButton onClick={async () => loginWithRedirect({ appState: { returnTo: location.state?.returnTo } })}>
        Login
      </LoginButton>
    </Wrapper>
  );
};

export { Login };
