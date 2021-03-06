import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    if (familiar) {
        greetings = <p>Welcome, my friend</p>
    }else{
        greetings = <p>Who the hell are you?</p>
    }

    //ternary operator
    const greetings2 =  familiar 
        ? <p>Welcome, my friend</p>
        : <p>Who the hell are you?</p>;

    // const food = familiar ? <p>I Will Buy Food For You</p> 
    //     : <p>Let's eat his his whose whose?</p>;
    

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                { greetings }
                { greetings2 }
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar 
                    ? <p>I Will Buy Food For You</p> 
                    : <p>Let's eat his his whose whose?</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p>Let's Join my facebook.</p>
                }
            </div>
        </div>
    );
};

export default User;