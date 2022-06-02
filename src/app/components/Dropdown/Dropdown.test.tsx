import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
    it('renders', () => {
        render(
            <MemoryRouter>
                <Providers>
                    <Dropdown
                        selectedOption={1}
                        options={[
                            { label: 1, value: 1 },
                            { label: 2, value: 2 },
                            { label: 3, value: 3 }
                        ]}
                    />
                </Providers>
            </MemoryRouter>
        );
    });
});
