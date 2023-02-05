import styled from "styled-components";

export const Wrapper = styled.button`
    display: ${(props) => props.display};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 10px;
    cursor: pointer;
    z-index: 1;

    /* position: absolute; */
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    left: 1112px;
    top: 41px;

    background-color: ${(props) => props.bg};
    border-radius: 8px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: ${(props) => props.fw};
    font-size: ${(props) => props.fs};
    line-height: 36px;
    color: ${(props) => props.color};
`