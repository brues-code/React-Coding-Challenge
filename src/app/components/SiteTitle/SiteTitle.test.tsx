import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import SiteTitle from './SiteTitle';

describe('<SiteTitle />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <SiteTitle documentTitle={'TEST'} />
                </Providers>
            </MemoryRouter>
        );
    });
});
