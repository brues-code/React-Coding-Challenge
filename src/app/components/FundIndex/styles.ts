import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const PaperContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FundPaper = styled(Paper)`
    height: 42px;
    display: flex;
    justify-content: center;
    width: 30%;
    margin: 8px;
    background-color: darkgrey;
`;
