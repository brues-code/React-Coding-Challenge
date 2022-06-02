import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import NotFound from './NotFound';

describe('<NotFound />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <NotFound />
                </Providers>
            </MemoryRouter>
        );
    });
});
