import React, { useState } from 'react';
import Match from './Match';
import TotalGoals from './TotalGoals';

const matches = [
  {
    id: 1,
    homeTeam: 'Germany',
    awayTeam: 'Poland',
  },
  {
    id: 2,
    homeTeam: 'Brazil',
    awayTeam: 'Mexico',
  },
  {
    id: 3,
    homeTeam: 'Argentina',
    awayTeam: 'Uruguay',
  },
];

function Container() {
  const [matchTime, setMatchTime] = useState(0);
  const [buttonText, setButtonText] = useState('Start');
  const [scoreBoard, setScoreBoard] = useState([0, 0, 0, 0, 0, 0]);
  const [internalId, setInternalId] = useState(0);

  const getRandomIntInclusive = (min: number, max: number) => {
    const minCeil = Math.ceil(min);
    const maxCeil = Math.floor(max);
    return Math.floor(Math.random() * (maxCeil - minCeil + 1)) + minCeil;
  };

  const updateScore = () => {
    const i = getRandomIntInclusive(0, 5);
    setScoreBoard((prevScoreBoard) => ({
      ...prevScoreBoard,
      [i]: prevScoreBoard[i] + 1,
    }));
  };

  const updateTime = () => {
    let tmpMatchTime = matchTime;
    const intervalHandle = setInterval(() => {
      if (tmpMatchTime >= 90) {
        clearInterval(intervalHandle);
        updateScore();
        setButtonText('Restart');
        console.log('Finished');
      } else if (tmpMatchTime % 10 === 0 && tmpMatchTime !== 0) {
        updateScore();
        console.log('Goal!!!');
      } else {
        console.log(`${tmpMatchTime} minute`);
      }
      setMatchTime(tmpMatchTime);
      tmpMatchTime += 1;
    }, 1000);

    // @ts-ignore
    setInternalId(intervalHandle);
  };

  const handleClick = () => {
    if (buttonText === 'Start') {
      setButtonText('Finish');
      updateTime();
    } else if (buttonText === 'Finish') {
      setButtonText('Restart');
      clearInterval(internalId);
    } else {
      setButtonText('Start');
      setScoreBoard([0, 0, 0, 0, 0, 0]);
      setMatchTime(0);
    }
  };

  const getTotalGoals = () => scoreBoard[0] + scoreBoard[1] + scoreBoard[2] + scoreBoard[3] + scoreBoard[4]
      + scoreBoard[5];

  return (
    <div id="container">
      <button type="submit" onClick={handleClick} id="button">{buttonText}</button>
      <Match
        key={matches[0].id}
        homeTeam={matches[0].homeTeam}
        awayTeam={matches[0].awayTeam}
        homeScore={scoreBoard[0]}
        awayScore={scoreBoard[1]}
      />
      <Match
        key={matches[1].id}
        homeTeam={matches[1].homeTeam}
        awayTeam={matches[1].awayTeam}
        homeScore={scoreBoard[2]}
        awayScore={scoreBoard[3]}
      />
      <Match
        key={matches[2].id}
        homeTeam={matches[2].homeTeam}
        awayTeam={matches[2].awayTeam}
        homeScore={scoreBoard[4]}
        awayScore={scoreBoard[5]}
      />
      <TotalGoals totalGoals={getTotalGoals()} />
    </div>
  );
}

export default Container;
