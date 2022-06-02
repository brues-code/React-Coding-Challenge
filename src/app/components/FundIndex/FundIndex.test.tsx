import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import FundIndex from './FundIndex';

describe('<FundIndex />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <FundIndex />
                </Providers>
            </MemoryRouter>
        );
    });
});
