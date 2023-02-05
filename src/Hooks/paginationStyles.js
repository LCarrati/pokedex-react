import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => (props.index == props.actualPage) ? '#f44336' : '#33a4f5'};
    width: 40px;
    height: 40px;
    color: white;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: bold;
    border: 1px solid;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        /* filter: brightness(85%) */
        filter: drop-shadow(0px 0px 3px white);
    }
`