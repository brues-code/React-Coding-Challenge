import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const FundPaper = styled(Paper)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 8px;
    max-height: 240px;
    min-width: 185px;
    width: 30%;
`;

export const DetailRow = styled.div`
    text-align: center;
    width: 100%;
`;
