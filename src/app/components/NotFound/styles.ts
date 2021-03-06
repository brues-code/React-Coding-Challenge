import styled from 'styled-components';

export const Page = styled.div`
    font-family: IBMPlexSans-Regular, sans-serif;
    font-stretch: normal;
    font-style: normal;
    margin: 50px auto;
    text-align: center;
    width: 100%;
`;

export const HeaderMessage = styled.div`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.theme.color.$Navy};
    padding-bottom: 8px;
`;

export const FooterMessage = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.theme.color.$Navy_l1};
`;
