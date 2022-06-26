import React, {useState} from "react";
import Match from "./Match";
import TotalGoals from "./TotalGoals";

const matches = [
    {
        id: 1,
        homeTeam: "Germany",
        awayTeam: "Poland"
    },
    {
        id: 2,
        homeTeam: "Brazil",
        awayTeam: "Mexico"
    },
    {
        id: 3,
        homeTeam: "Argentina",
        awayTeam: "Uruguay"
    }
];

function Container() {
    const [time, setTime] = useState(0);
    const [buttonText, setButtonText] = useState("Start");
    const [scoreBoard, setScoreBoard] = useState([0,0,0,0,0,0]);
    const [internalId, setInternalId] = useState(0);

    const updateTime = () => {
        var tmpTime = time;
        let intervalHandle: NodeJS.Timeout = setInterval(function(){
            if(tmpTime > 90){
                clearInterval(intervalHandle);
                updateScore();
                console.log("Finished");
            } else if(tmpTime % 10 === 0 && tmpTime !== 0){
                updateScore();
                console.log("Goal!!!");
            } else {
                console.log(tmpTime + " minute");
            }
            setTime(tmpTime);
            tmpTime += 1;
        }, 1000);

        // @ts-ignore
        setInternalId(intervalHandle);
    }

    function handleClick() {
        if(buttonText === "Start") {
            setButtonText("Finish");
            updateTime()
        }
        else if(buttonText === "Finish") {
            setButtonText("Restart");
            clearInterval(internalId);
        }
        else {
            setButtonText("Start");
            setScoreBoard([0,0,0,0,0,0]);
            setTime(0);
        }
    }


    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function updateScore() {
        const i = getRandomIntInclusive(0,5);
        setScoreBoard((prevScoreBoard) => {
            return {
                ...prevScoreBoard,
                [i]: prevScoreBoard[i] + 1
            }
        })
    }

    function getTotalGoals(){
        return scoreBoard[0]+scoreBoard[1]+scoreBoard[2]+scoreBoard[3]+scoreBoard[4]+scoreBoard[5]
    }

    return (
        <div id="container">
            <button onClick={handleClick} id="button">{buttonText}</button>
                <Match
                    key={matches[0].id} homeTeam={matches[0].homeTeam} awayTeam={matches[0].awayTeam} homeScore={scoreBoard[0]} awayScore={scoreBoard[1]}
                />
                <Match
                    key={matches[1].id} homeTeam={matches[1].homeTeam} awayTeam={matches[1].awayTeam} homeScore={scoreBoard[2]} awayScore={scoreBoard[3]}
                />
                <Match
                    key={matches[2].id} homeTeam={matches[2].homeTeam} awayTeam={matches[2].awayTeam} homeScore={scoreBoard[4]} awayScore={scoreBoard[5]}
                />
            <TotalGoals totalGoals={getTotalGoals()}/>
        </div>
    );
}

export default Container;
