import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import Topbar from './Topbar';

describe('<Topbar />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <Topbar />
                </Providers>
            </MemoryRouter>
        );
    });
});
