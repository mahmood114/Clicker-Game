import { useState, useEffect } from "react";
import { ButtonWrapper, ButtonsWrapper } from "../styles";

const Building = (props) => {

    const [perSecBuildingPrice, setPerSecBuildingPrice] = useState(10);
    const [perClickBuildingPrice, setPerClickBuildingPrice] = useState(10);
    const [a, setA] = useState(0);
    
    const [upgradableIncrement, setUpgradableIncrement] = useState(1);
    const [upgradeThreshold, setUpgradeThreshold] = useState(100);

    const points = props.points;
    const setPoints = props.setPoints;
    
    // UseEffect
    useEffect(() => {
        if (a >= 1)
            setInterval(() => setPoints(points => points + upgradableIncrement), 1000);
        // eslint-disable-next-line
    }, [a]);

    // handle buttons
    const buyBuildingPerSec = () => {

        if(points >= perSecBuildingPrice){
            setPoints(points - perSecBuildingPrice);
            setA(a => a+1);
            props.setPerSecondIncrement(perSecondIncrement => perSecondIncrement + upgradableIncrement);
            setPerSecBuildingPrice((perSecBuildingPrice * 2).toFixed());
        }
    }

    const buyBuildingPerClick = () => {
        
        if (points >= perClickBuildingPrice){
            setPoints(points - perClickBuildingPrice);
            props.setPerClickIncrement(perClickIncrement => perClickIncrement + upgradableIncrement);
            setPerClickBuildingPrice((perClickBuildingPrice * 1.5).toFixed());
        }
    }

    const changeUpgrade = () => {

        setUpgradeThreshold(upgradeThreshold => upgradeThreshold * 5);
        setUpgradableIncrement(upgradableIncrement => upgradableIncrement*2);        
    }

//  View
    const ViewBuildingButtons = () => {
        // Conditions
        const perClick = points >= perClickBuildingPrice;
        const perSecond = points >= perSecBuildingPrice;

        // Elements
        const clickButtonElement = (
            <ButtonWrapper>
                <button onClick={buyBuildingPerClick}>Buy a building for {perClickBuildingPrice}$</button>
                <p>Adds +{upgradableIncrement}$ per click</p>
            </ButtonWrapper>
        );

        const secondButtonElement = (
            <ButtonWrapper>
                <button onClick={buyBuildingPerSec}>Buy a building for {perSecBuildingPrice}$</button>
                <p>Generates +{upgradableIncrement}$ per second</p>
            </ButtonWrapper>
        );

        if (perClick && perSecond) return (
            <ButtonsWrapper>
                {secondButtonElement}
                {clickButtonElement}
            </ButtonsWrapper>
        );
        
        if (perClick) return (
            <ButtonsWrapper>
                {clickButtonElement}
            </ButtonsWrapper>
        );
        
        if (perSecond) return (
            <ButtonsWrapper>
                {secondButtonElement}
            </ButtonsWrapper>
        );
    }

    const ViewUpgradeButtons = () => {
        if (points >= upgradeThreshold){

            return (
                <ButtonsWrapper>
                    <ButtonWrapper>
                        <button onClick={changeUpgrade}>Upgrade buildings x{upgradableIncrement*2}</button>
                    </ButtonWrapper>
                </ButtonsWrapper>
            )
        }

    }

    return (
        <div>
            {ViewBuildingButtons()}
            {ViewUpgradeButtons()}
        </div>
    );
};

export default Building;