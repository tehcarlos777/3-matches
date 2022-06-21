import React from "react";

function Score(props: any) {
    return (
        <div>
            {props.homeScore}:{props.awayScore}
        </div>
    );
}

export default Score;
