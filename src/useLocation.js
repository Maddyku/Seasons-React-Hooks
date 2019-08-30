import {useState, useEffect} from 'react'; //import React Hooks

export default () => {
    /* State Object initialized using useState React Hook
    (with values null and '' respectively bc/ we waiting on geolocation API call) */
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    console.log(`Geolocation API Call: Your latitude is: ${[lat]}`);

    useEffect(() => { //useEffect React Hook allows us to use lifecycle methods inside functional component
        window.navigator.geolocation.getCurrentPosition(
            /* Success Callback Function and update state of position.coords.latitude with setLat */
            position => setLat(position.coords.latitude), 
            err => setErrorMessage(err.message) /*Error Callback Function
            and update state of err.message with setErrorMessage*/       
        )
    }, [])

    return [lat, errorMessage]
}