import React from 'react';

type TotalGoalsProps = { totalGoals: number };

const TotalGoals = (props: TotalGoalsProps) => {
    return (
        <div id='total-goals'>
            Total goals:
            {' '}
            {props.totalGoals}
        </div>
    );
};

export default TotalGoals;
