import React from 'react'; 
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => { //Functional Component App 
    const [lat, errorMessage] = useLocation();

    let content;
    //If statements are for Conditional Rendering
    if (errorMessage && !lat) {
        content = <div>Error: {errorMessage}</div>
    } else if (!errorMessage && lat) {
        /*We are taking property from state (lat) on the App
        Component and passing it as a prop into 
        SeasonDisplay child component*/
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Spinner message = "Please accept geolocation request "/>
}
    //We must return content as JSX in React    
        return (
        <div className = "border red">
            {content}
        </div>
    )
}

// Renders the App component into a div with id 'root'
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);