import styled from "styled-components";

export const Container = styled.section`
    background-color: #5E5E5E;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0;
    column-gap: 19px;
    justify-content: center;
    padding-bottom: 50px;
    min-height: 100%;

    && .mainTitle{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
        color: #FFFFFF;
        margin: 60px 0 0 40px;
        width: 100%;
    }
`