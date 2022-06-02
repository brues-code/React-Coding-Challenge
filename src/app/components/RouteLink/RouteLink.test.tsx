import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';
import { HOME } from 'app/route-paths';

import RouteLink from './RouteLink';

describe('<RouteLink />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <RouteLink to={HOME}>Home Link</RouteLink>
                </Providers>
            </MemoryRouter>
        );
    });
});
