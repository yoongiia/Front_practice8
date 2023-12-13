import React from 'react';

const Quote = (props) => {
    return (
        <div>
            <p style={{paddingTop: "7px", width: "300px"}}>{props.text}</p>
        </div>
    );
}
export default Quote;
