import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDateTime } from '../../../../store/dateTimeSlice';
import moment from 'moment';


const CurrentDate = (props) => {
    const dispatch = useDispatch();
    const dateTime = useSelector(state => state.dateTime.dateTime);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setCurrentDateTime(moment().valueOf()));
        }, 10000);
        return () => clearInterval(interval);
    }, [dispatch]);
    const currentDate = moment(dateTime)
    
    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentDate.format('MMM Do YY')}</p>
        </div>
    );
}

export default CurrentDate;
