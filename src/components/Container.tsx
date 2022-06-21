import React from "react";
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
    return (
        <div id="container">
            <button id="button">Start</button>
            {matches.map((match) => (
                <Match
                    key={match.id} homeTeam={match.homeTeam} awayTeam={match.awayTeam} homeScore="0" awayScore="0"
                />
            ))}
            <TotalGoals totalGoals="3"/>
        </div>
    );
}

export default Container;
