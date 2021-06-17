import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.mainColor}
    }
`;

export const Background = styled.div`
    background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20190925/pngtree-abstract-halftone-dots-background-with-circular-style-image_315130.jpg");
`;

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

        :active{
            transform: translateY(2px);
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

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
`;

export const ButtonWrapper = styled.div`
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
        color: #38b000;
        border: 1px solid #38b000;

        transition: 0.2s;
        
        :hover{
            background-color: #38b000;
            color: white;
        }

        :active{
            transform: translateY(2px);
        }
    }

`;

export const Footer = styled.footer`
    text-align: center;
    opacity: 0.6;

`;

export const ThemeButton = styled.button`
    margin: 10px;
    font-size: 1.3em;
    
    color: ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.mainColor}

    
`;