import { useState, useEffect } from "react";
import { BuyButtonWrapper, BuildingsWrapper } from "../styles";

const Building = (props) => {

    const [perSecBuildingPrice, setPerSecBuildingPrice] = useState(10);
    const [perClickBuildingPrice, setPerClickBuildingPrice] = useState(10);
    const [a, setA] = useState(0);

    const points = props.points;
    const setPoints = props.setPoints;
    
    // UseEffect
    useEffect(() => {
        if (a >= 1)
            setInterval(() => setPoints(points => points + 1), 1000);
        // eslint-disable-next-line
    }, [a]);

    const buyBuildingPerSec = () => {

        if(points >= perSecBuildingPrice){
            setPoints(points - perSecBuildingPrice);
            setA(a => a+1);
            props.setPerSecondIncrement(perSecondIncrement => perSecondIncrement + 1);
            setPerSecBuildingPrice((perSecBuildingPrice * 2).toFixed());
        }
    }

    const buyBuildingPerClick = () => {
        
        if (points >= perClickBuildingPrice){
            setPoints(points - perClickBuildingPrice);
            props.setPerClickIncrement(perClickIncrement => perClickIncrement + 1);
            setPerClickBuildingPrice((perClickBuildingPrice * 1.5).toFixed());
        }
    }

//  View
    const ViewButtons = () => {
        // Conditions
        const perClick = points >= perClickBuildingPrice;
        const perSecond = points >= perSecBuildingPrice;

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
            <BuildingsWrapper>
                {secondButtonElement}
            </BuildingsWrapper>
        );
    }

    return (
        <div>
            {ViewButtons()}
        </div>
    );
};

export default Building;