import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    row-gap: 0;
    column-gap: 19px;
    justify-content: center;
    padding-bottom: 50px;
    min-height: 100%;

    && h1 {
        margin: 26px;
        width: 100%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 0;
    column-gap: 19px;
    justify-content: center;
    padding-bottom: 50px;
    min-height: 100%;
`

export const NavBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 20px;
    justify-content: center;
`