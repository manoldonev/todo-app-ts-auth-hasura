import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../components';

const Home = (): JSX.Element => {
  const { logout } = useAuth0();

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Button onClick={() => logout()}>Logout</Button>
      </nav>
    </>
  );
};

export { Home };
