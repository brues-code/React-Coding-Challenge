import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import Sidebar from './Sidebar';
import funds from 'mocks/funds.json';

describe('<Sidebar />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <Sidebar selectedFund={funds[0]} selectedCompany={funds[0].companies[0]} />
                </Providers>
            </MemoryRouter>
        );
    });
});
