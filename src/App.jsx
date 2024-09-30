import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import imgArrow from './Assets/arrow.png';
import ScoreIndicator from './Components/ScoreIndicator';
import { useState } from 'react';

function App() {
  const [scoreToReach, setScoreToReach] = useState(501);
  const [score, setScore] = useState(501);
  const [oldScore, setOldScore] = useState(0);
  const [multiplicator, setMultiplicator] = useState(1);
  const [arrows, setArrows] = useState(3);
  const [laps, setLaps] = useState(0);


  const handleClick = (number) => { 
    if (arrows - 1 == 0) {
      setArrows(3);
      setLaps(laps + 1);
      if (score - (number * multiplicator) >= 0) {
        setOldScore(score - (number * multiplicator));
      }
    }else{
      setArrows(arrows - 1);
    }

    if (number == 25 && multiplicator == 3) {
      alert("TRICHEUR !!!!!");
      setMultiplicator(1);
    }else if((score -(number * multiplicator)) < 0){
      alert('Tour terminé !!');
      setArrows(3)
      setLaps(laps + 1);
      setMultiplicator(1);
      setScore(oldScore);
    } else if((score -(number * multiplicator)) == 0){
      setScore(score - (number * multiplicator));
      setMultiplicator(1);
      alert("Victoire !!!!");
    }else{
      setScore(score - (number * multiplicator));
      setMultiplicator(1);
    }
  }

  const replay = () => {
    setMultiplicator(1);
    setScore(501);
    setArrows(3);
    setLaps(0);
  }

  return <>
  <Container className='d-flex flex-column align-items-center'>
    <h1>Flechettes</h1>
    <ScoreIndicator maxValue={scoreToReach} value={score}/>
    <h5>Tours : {laps}</h5>
    <div className='d-flex justify-content-center'>
      {arrows == 3 && <>
        <img src={imgArrow} className='arrow-img'/>
        <img src={imgArrow} className='arrow-img'/>
        <img src={imgArrow} className='arrow-img'/>
      </>}

      {arrows == 2 && <>
        <img src={imgArrow} className='arrow-img'/>
        <img src={imgArrow} className='arrow-img'/>
      </>}

      {arrows == 1 && <>
        <img src={imgArrow} className='arrow-img'/>
      </>}
    </div>
   
    
    {score == 0 ? <>  
      {/* J'afficher quelque chose si mon score est égale à zéro */}
      <Button variant='primary' className='mt-3' onClick={replay}>Rejouer</Button>
    </> : <>
      {/* J'afficher queque chose si mon score n'est pas égale à zéro */}
    <div className='d-flex justify-content-between col-5 col-xl-3 mt-3'>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(1)}}>1</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(2)}}>2</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(3)}}>3</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(4)}}>4</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(5)}}>5</Button>
    </div>
    <div className='d-flex justify-content-between col-5 col-xl-3 mt-3'>
      <Button variant='light' className='col-2' onClick={() => {handleClick(6)}}>6</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(7)}}>7</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(8)}}>8</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(9)}}>9</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(10)}}>10</Button>
    </div>
    <div className='d-flex justify-content-between col-5 col-xl-3 mt-3'>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(11)}}>11</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(12)}}>12</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(13)}}>13</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(14)}}>14</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(15)}}>15</Button>
    </div>
    <div className='d-flex justify-content-between col-5 col-xl-3 mt-3'>
      <Button variant='light' className='col-2' onClick={() => {handleClick(16)}}>16</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(17)}}>17</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(18)}}>18</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(19)}}>19</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(20)}}>20</Button>
    </div>
    <div className='d-flex justify-content-between col-5 col-xl-3 mt-3'>
      <Button variant='danger' className='col-2' onClick={() => {handleClick(0)}}>0</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(25)}}>25</Button>
      <Button variant='dark' className='col-3' onClick={() => {setMultiplicator(2)}}>DOUBLE</Button>
      <Button variant='light' className='col-3' onClick={() => {setMultiplicator(3)}}>TRIPLE</Button>
    </div>
    </>}
  </Container> 
  </>;
} 

export default App;
