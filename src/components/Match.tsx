import React from "react";
import Score from "./Score";

function Match(props: any) {
    return (
        <div className="matches">
            {props.homeTeam} vs {props.awayTeam}<Score homeScore={props.homeScore} awayScore={props.awayScore}/>
        </div>
    );
}

export default Match;
