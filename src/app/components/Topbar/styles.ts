import styled from 'styled-components';

export const TopbarContainer = styled.div`
    display: flex;
    z-index: 10;
    position: fixed;
    max-height: 48px;
    display: -webkit-box;
    min-width: 100%;
    background-color: ${props => props.theme.color.$White};
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.color.$Navy_l4};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: ${props => props.theme.color.$White};
    min-width: 100%;
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.color.$Navy_l4};
`;
