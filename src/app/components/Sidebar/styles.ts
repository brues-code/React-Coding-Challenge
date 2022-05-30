
import styled from 'styled-components';

export const SidebarContainer = styled.div`
    color: ${props => props.theme.color.$White};
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 48px;
    width: 280px;
    height: calc(100% - 48px);
    z-index: 2;
`;

export const MenuContainer = styled.div`
    padding: 16px 8px;
`;