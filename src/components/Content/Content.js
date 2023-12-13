import React from 'react';
import './content.css';
import Quotes from './DataAPI/Quotes';

const Content = (props) => {
  return (
    <div className="content_wrapper">
      <p className="name_content">{props.title}</p>
      <Quotes/>
    </div>
  );
};

export default Content;