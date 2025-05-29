import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// Mock the global fetch to return a fake Hello World response
beforeEach(() => {
global.fetch = jest.fn(() =>
Promise.resolve({ json: () => Promise.resolve({ message: "Hello,World!" }) })
);
});
test('renders "Hello, World!" message', async () => {
render(<App />);
// Expect the message to appear after fetch resolves
const messageElement = await screen.findByText(/Hello, World!/i);
expect(messageElement).toBeInTheDocument();
});