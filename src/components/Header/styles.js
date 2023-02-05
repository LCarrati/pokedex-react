import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 160px;
    background: #FFFFFF;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;

    & img {
        width: 307px;
        height: 113px;
    }

    && .lt-bullet {
        width: 7.29px;
        height: 14.58px;
    }

    && .return {
        font-size: 24px;
        font-weight: 700;
        display: flex;
        gap: 7px;
        align-items: center;
        color: black;
    }
`

export const ReturnMenu = styled.div`
    visibility: ${(props) => props.rtdisplay ? props.rtdisplay : "visible"};
`
