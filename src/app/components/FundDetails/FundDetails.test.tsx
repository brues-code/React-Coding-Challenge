import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import FundDetails from './FundDetails';
import funds from 'mocks/funds.json';

describe('<FundDetails />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <FundDetails fund={funds[0]} />
                </Providers>
            </MemoryRouter>
        );
    });
});
