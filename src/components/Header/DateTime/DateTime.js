import React from 'react';
import CurrentDate from './CurrentDate/CurrentDate';
import CurrentTime from './CurrentTime/CurrentTime';

const DateTime = () => {
    return (
        <div style={{marginRight: "30px", alignSelf: "center"}}>
            <CurrentDate/>
            <CurrentTime/>
        </div>
    );
}

export default DateTime;
