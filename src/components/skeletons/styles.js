import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 19px;
    justify-content: center;
    /* position: relative; */

    && .skeletonCard {
        width: 440px;
        height: 210px;
        border-radius: 12px;
        margin-top: 50px;
        background-color: #9e9e9e;
        display: flex;
        align-items: center;
        justify-content: center;

        && .mySpinner {
            width: 80px;
            height: 75px;
            color: red;
        }
    }
`