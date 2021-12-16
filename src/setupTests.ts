// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }: { children: JSX.Element }) => children,
  useAuth0: () => {
    return {
      isLoading: false,
      user: undefined,
      isAuthenticated: false,
      loginWithRedirect: jest.fn(),
    };
  },
}));
