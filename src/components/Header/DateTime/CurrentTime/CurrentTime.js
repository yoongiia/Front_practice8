import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDateTime } from '../../../../store/dateTimeSlice';
import moment from 'moment';


const CurrentTime = (props) => {
    const dispatch = useDispatch();
    const dateTime = useSelector(state => state.dateTime.dateTime);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setCurrentDateTime(moment().valueOf()));
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);
    const currentTime = moment(dateTime)

    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentTime.format('LTS')}</p>
        </div>
    );
}

export default CurrentTime;
