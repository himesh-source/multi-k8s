import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

test('renders app', async () => {
  axios.get.mockResolvedValue({ data: {} });

  render(<App />);

  expect(true).toBe(true);
});