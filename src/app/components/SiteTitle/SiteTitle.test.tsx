import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Providers from 'app/context/Providers';

import SiteTitle from './SiteTitle';

describe('<SiteTitle />', () => {
    const SiteTitleTest = () => (
        <MemoryRouter>
            <Providers>
                <SiteTitle documentTitle={'TEST'} />
            </Providers>
        </MemoryRouter>
    );
    it('renders', () => {
        render(<SiteTitleTest />);
    });
    it('changes documentTitle', async () => {
        render(<SiteTitleTest />);
        await waitFor(() => expect(document.title).toEqual('TEST | Aumni Fund'));
    });
});
