import React from "react";
import Score from "./Score";

type MatchProps = { homeTeam: string, awayTeam: string, homeScore: number, awayScore: number };

const Match = (props: MatchProps) => {
    return (
        <div className="matches">
            {props.homeTeam} vs {props.awayTeam}<Score homeScore={props.homeScore} awayScore={props.awayScore}/>
        </div>
    );
}

export default Match;
