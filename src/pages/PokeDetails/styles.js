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
        margin: 60px 0 56px 40px;
        width: 100%;
    }
`

export const DetailCardWrapper = styled.div`
    display: flex;
    position: relative;

    && .mainImg{
        position: absolute;
        top: -120px;
        right: 0px;
        width: 270px;
        height: 270px;
    }

    && .normal {
        background-color: #BF9762;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .grass {
        background-color: #729F92;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .fire {
        background-color: #EAAB7D;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .water {
        background-color: #71C3FF;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .electric {
        background-color: #f7cf2e;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .ice {
        background-color: #98d5d7;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .ground {
        background-color: #dfbf69;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .flying {
        background-color: #a98ff0;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .poison {
        background-color: #a040a0;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .fighting {
        background-color: #bf3029;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .psychic {
        background-color: #f65687;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .dark {
        background-color: #725847;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .rock {
        background-color: #b8a137;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .bug {
        background-color: #a8b720;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .ghost {
        background-color: #6e5896;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .steel {
        background-color: #b9b7cf;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .dragon {
        background-color: #004170;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }

    && .fairy {
        background-color: #f9aec7;
        display: flex;
        border-radius: 37.8857px;
        width: 1389.14px;
        height: 663px;
        background-image: url('../bigWing.png');
        background-repeat: no-repeat;
        background-position: right;
    }
`

export const SpritesWrapper = styled.div`
    display: flex;
    gap: 47px;
    flex-direction: column;
    margin: 26px 34px 26px 44px;
`

export const Sprites = styled.div`
    width: 282px;
    height: 282px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    /* display: flex;
    flex-direction: column;
    gap: 47px; */
`

export const Stats = styled.div`
    width: 343px;
    height: 613px;
    background-color: #FFFFFF;
    border-radius: 12px;
    margin: 26px 0;
    padding: 20px;

    && .statWrapper {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 2.7fr;
    }

    && .statName {
        justify-self: end;
        font-size: 15px;
    }

    && .statValue {
        justify-self: center;
        font-weight: bold;
    }

    && .statMaxBar {
        width: 100%;
        display: flex;
    }

    && .statBar {
        width: 62.5%;
        border-radius: 10px;
        height: 10px;
        align-self: center;
    }
`

export const MovesWrapper = styled.div`
    width: 343px;
    height: 613px;
    margin: 26px 0 26px 68px;
    display: flex;
    flex-direction: column;
    gap: 46px;
`

export const MiniCard = styled.div`
    width: 343px;
    height: 114px;
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

`

export const Moves = styled.div`
    width: 292px;
    height: 453px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 20px;

    && h1{
        margin-bottom: 20px;
    }

    && .moveNameWrapper{
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;
    }

    && .moveName{
        padding: 10px;
        max-width: fit-content;
        background-color: #ECECEC;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
`

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