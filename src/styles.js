import styled from "styled-components";

export const ClickerButtonStyled = styled.div`
    ${'' /* display: flex;
    justify-content: center;
    align-items: center; */}
    height: 90px;

    button {
        display: block;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        font-size: 2em;
    }

    p {
        text-align: center;
    }
`;

export const PointsStyled = styled.p`
    text-align: center;
    font-size: 3em;
    margin-bottom: 0;
`;

export const BuildingsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
`;

export const BuyButtonWrapper = styled.div`
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;

    p {
        text-align: center;
    }
`;