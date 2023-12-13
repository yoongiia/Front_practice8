import moment from 'moment';
import React, { useState, useEffect } from 'react';

const CurrentDate = (props) => {
    const [currentDate, setCurrentDate] = useState(props.dateObj);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment());
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentDate.format("MMM Do YY")}</p>
        </div>
    );
}

export default CurrentDate;
