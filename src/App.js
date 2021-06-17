import './App.css';
import {useState} from "react";
import Building from './components/Building';
import Click from './components/Click';
import { Footer } from './styles';

function App() {

//  States
  const [points, setPoints] = useState(0);
  const [perSecondIncrement, setPerSecondIncrement] = useState(0);
  const [perClickIncrement, setPerClickIncrement] = useState(1);

  return (
    <div>
      <Click points={points} setPoints={setPoints} perClickIncrement={perClickIncrement} perSecondIncrement={perSecondIncrement}/>
      <Building points={points} setPoints={setPoints} perSecondIncrement={perSecondIncrement} setPerSecondIncrement={setPerSecondIncrement} perClickIncrement={perClickIncrement} setPerClickIncrement={setPerClickIncrement}></Building>
      <Footer>
        <p>Copyright &copy; 2021 Sayed Mahmood Almohri</p>
      </Footer>
    </div>
  );
}

export default App;
