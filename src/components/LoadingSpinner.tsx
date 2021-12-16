import Loader from 'react-loader-spinner';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = (): JSX.Element => {
  return (
    <Wrapper>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
    </Wrapper>
  );
};

export { LoadingSpinner };
