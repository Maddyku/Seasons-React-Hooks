import './SeasonDisplay.css'
import React from 'react';

//Config object placed at top
const seasonConfig = {
        summer: {
            text: "Let's hit the beach!",
            iconName: 'sun'
    },
        winter: {
            text: "Burr, it's very chilly!",
            iconName: 'snowflake'
    }
}

//Helper function also placed at top
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) { //If between Months April - September
        return lat > 0 ? 'summer' : 'winter'; /* And if we are
        in the northern hemisphere (if lat >0) we return summer
        else we return winter for southern hemisphere */
    } else {
        return lat > 0 ? 'winter' : 'summer'; /* Else if we
        are in between Months of October - March we 
        return winter for northern hemisphere (if lat > 0)
        or summer for southern hemisphere  */    
    }
}

//Functional components placed on bottom
const SeasonDisplay = (props) => {
    //We store return from getSeason function in season variable
    const season = getSeason(props.lat, new Date().getMonth());
    /* We destructure text and iconName from seasonConfig object
    based on season return */
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className = {`${iconName} icon-left massive icon`} />
            <h1>{text}</h1>
            <i className = {`${iconName} icon-right massive icon`} />
        </div>
    );
};

export default SeasonDisplay;