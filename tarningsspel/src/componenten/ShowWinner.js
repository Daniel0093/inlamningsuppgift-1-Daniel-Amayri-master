import React from 'react';

function declareWinner(userSlump, computerSlump){
    let winner = '';

    if(userSlump === null && computerSlump === null){
        winner = 'Start Game';
    }else if(userSlump === computerSlump){
        winner = 'Draw'
    } else if(userSlump > computerSlump){
        winner = 'You Win';
    }else{
        winner = 'Computer Win'
    }

    return winner;
}

function ChooseWinner(props){
    const win = declareWinner(props.user, props.computer);

    return(
        <section>
            <h2>{win}</h2>
        </section>
    )
}

export default ChooseWinner;