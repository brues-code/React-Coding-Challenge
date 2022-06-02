import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import FundSelector from './FundSelector';

describe('<FundSelector />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <FundSelector />
                </Providers>
            </MemoryRouter>
        );
    });
});
