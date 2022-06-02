import React from 'react';
import { render } from '@testing-library/react';

import CompanyTable from './CompanyTable';

import Providers from 'app/context/Providers';

import funds from 'mocks/funds.json';
import { MemoryRouter } from 'react-router-dom';

describe('<CompanyTable />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <CompanyTable fund={funds[0]} />
                </Providers>
            </MemoryRouter>
        );
    });
});
