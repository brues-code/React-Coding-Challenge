import { renderApp } from './index';

describe('app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        renderApp(div as HTMLElement);
    });
});
