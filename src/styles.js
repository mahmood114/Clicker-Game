import styled from "styled-components";

export const ClickerButtonStyled = styled.div`
    height: auto;

    button {
        display: block;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        font-size: 2em;

        background-color: red;
        color: white;

        padding: 10px;
        border: none;
        border-radius: 5px;

        cursor: pointer;

        :hover {
            
        }
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
    width: 60%;
`;

export const BuyButtonWrapper = styled.div`
    display: inline-block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    flex: 1;

    p {
        text-align: center;
        opacity: 0.4;
        margin-top: 2px;
    }

    button {
        cursor: pointer;

        display: block;
        margin-left: auto;
        margin-right: auto;

        font-size: 1.2em;
        border-radius: 5px;
        padding: 10px;
        
        background-color: white;
        color: #007bff;
        border: 1px solid #007bff;

        transition: 0.2s;
        
        :hover{
            background-color: #007bff;
            color: white;
        }

        :disabled{
            opacity: 0.5;
        }
    }

`;

export const Footer = styled.footer`
    text-align: center;
    opacity: 0.6;

`;