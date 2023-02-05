import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 19px;
    justify-content: center;
    position: relative;

    && .card {
        width: 440px;
        height: 210px;
        border-radius: 12px;
        margin-top: 50px;
        list-style: none;
    }

    && .photo {
        width: 193px;
        height: 193px;
        position: absolute;
        left: 236px;
        top: -3px;
    }

    && .wings {
        position: absolute;
        top: 50px;
        right: 0;
    }

    && .number {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }

    && .name {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        text-transform: capitalize;
    }

    && .types {
        list-style: none;
        display: flex;
        gap: 7px;
        margin-top: 10px;
    }

    && .detalhesLink {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }

    && .container-top {
        margin: 23px;
    }

    && .bottom {
        display: flex;
        margin: 23px;
        justify-content: space-between;
    }

    && .normal {
    background-color: #BF9762;
    }

    && .grass {
        background-color: #729F92;
    }

    && .fire {
        background-color: #EAAB7D;
    }

    && .water {
        background-color: #71C3FF;
    }

    && .electric {
        background-color: #f7cf2e;
    }

    && .ice {
        background-color: #98d5d7;
    }

    && .ground {
        background-color: #dfbf69;
    }

    && .flying {
        background-color: #a98ff0;
    }

    && .poison {
        background-color: #a040a0;
    }

    && .fighting {
        background-color: #bf3029;
    }

    && .psychic {
        background-color: #f65687;
    }

    && .dark {
        background-color: #725847;
    }

    && .rock {
        background-color: #b8a137;
    }

    && .bug {
        background-color: #a8b720;
    }

    && .ghost {
        background-color: #6e5896;
    }

    && .steel {
        background-color: #b9b7cf;
    }

    && .dragon {
        background-color: #004170;
    }

    && .fairy {
        background-color: #f9aec7;
    }

`