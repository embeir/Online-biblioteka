import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import "@testing-library/jest-dom/extend-expect";
import { Auth0Provider } from '@auth0/auth0-react';

test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    render(
        <Auth0Provider history={history}>
            <App />
        </Auth0Provider>,
    )
    expect(screen.getByText(/Online-biblioteka/i)).toBeInTheDocument()
})