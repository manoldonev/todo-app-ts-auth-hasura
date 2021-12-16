import styled from 'styled-components/macro';

const Button = styled.button.attrs({ type: 'button' })`
  align-items: center;
  appearance: none;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #363636;
  cursor: pointer;
  display: inline-flex;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  height: 2.5em;
  justify-content: center;
  line-height: 1.5;
  padding: calc(0.5em - 1px) 1em;
  position: relative;
  text-align: center;
  user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:active {
    border-color: #4a4a4a;
    outline: 0;
  }

  &:focus {
    border-color: #485fc7;
    outline: 0;
  }

  &:hover {
    border-color: #b5b5b5;
  }

  &:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
  }
`;

export { Button };
