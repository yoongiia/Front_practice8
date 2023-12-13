import React from 'react';
import CurrentDate from './CurrentDate/CurrentDate';
import CurrentTime from './CurrentTime/CurrentTime';
import moment from 'moment/moment';

const DateTime = () => {
    const dateTime = moment();
    return (
        <div style={{marginRight: "30px", alignSelf: "center"}}>
            <CurrentDate dateObj = {dateTime}/>
            <CurrentTime dateObj = {dateTime}/>
        </div>
    );
}

export default DateTime;
