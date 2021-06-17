import { useState, useEffect } from "react";
import { BuyButtonWrapper, BuildingsWrapper } from "../styles";

const Building = (props) => {

    const [perSecBuildingPrice, setPerSecBuildingPrice] = useState(10);
    const [perClickBuildingPrice, setPerClickBuildingPrice] = useState(10);
    const [a, setA] = useState(0);
    const [disablePerClick, setDisablePerClick] = useState(true);
    const [disablePerSecond, setDisablePerSecond] = useState(true);


    // UseEffect
    useEffect(() => {

        if (a >= 1)
            setInterval(() => props.setPoints(points => points + 1), 1000);
    }, [a]);

    const buyBuildingPerSec = () => {

        if(props.points >= perSecBuildingPrice){
            props.setPoints(props.points - perSecBuildingPrice);
            setA(a => a+1);
            props.setPerSecondIncrement(perSecondIncrement => perSecondIncrement + 1);
            setPerSecBuildingPrice((perSecBuildingPrice * 1.3).toFixed());
        }
    }

    const buyBuildingPerClick = () => {
        
        if (props.points >= perClickBuildingPrice){
            props.setPoints(props.points - perClickBuildingPrice);
            props.setPerClickIncrement(perClickIncrement => perClickIncrement + 1);
            setPerClickBuildingPrice((perClickBuildingPrice * 1.1).toFixed());
        }
    }

//  View
    const ViewButtons = () => {
        // Conditions
        const perClick = props.points >= perClickBuildingPrice;
        const perSecond = props.points >= perSecBuildingPrice;

        // Elements
        const clickButtonElement = (
            <BuyButtonWrapper>
                <button onClick={buyBuildingPerClick}>Buy 1 building for {perClickBuildingPrice}$</button>
                <p>Adds +1$ per click</p>
            </BuyButtonWrapper>
        );

        const secondButtonElement = (
            <BuyButtonWrapper>
                <button onClick={buyBuildingPerSec}>Buy 1 building for {perSecBuildingPrice}$</button>
                <p>Generates +1$ per second</p>
            </BuyButtonWrapper>
        );

        if (perClick && perSecond) return (
            <BuildingsWrapper>
                {secondButtonElement}
                {clickButtonElement}
            </BuildingsWrapper>
        );
        
        if (perClick) return (
            <BuildingsWrapper>
                {clickButtonElement}
            </BuildingsWrapper>
        );
        
        if (perSecond) return (
            {secondButtonElement}
        );
    }

    return (
        <div>
            {ViewButtons()}
        </div>
    );
};

export default Building;