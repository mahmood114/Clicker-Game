import { PointsStyled, ClickerButtonStyled } from "../styles";

const Click = (props) => {

    
    const incrementPoints = () => props.setPoints(props.points + props.perClickIncrement)

    return (
        <div>
            <PointsStyled>{props.points}$</PointsStyled>
            <ClickerButtonStyled>
                <button onClick={incrementPoints}>Click me!</button>
                <p>+{props.perClickIncrement}$ per click</p>
                <p>+{props.perSecondIncrement}$ per second</p>
            </ClickerButtonStyled>
        </div>
    );
};

export default Click;