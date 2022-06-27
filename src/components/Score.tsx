import React from "react";

type ScoreProps = { homeScore: number, awayScore: number };

function Score(props: ScoreProps) {
    return (
        <div>
            {props.homeScore}:{props.awayScore}
        </div>
    );
}

export default Score;
