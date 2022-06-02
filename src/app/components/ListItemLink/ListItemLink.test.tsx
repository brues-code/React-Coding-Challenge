import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { HOME } from 'app/route-paths';
import Providers from 'app/context/Providers';

import ListItemLink from './ListItemLink';

describe('<ListItemLink />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <ListItemLink to={HOME} />
                </Providers>
            </MemoryRouter>
        );
    });
});
