import React from 'react';

import './Post.css';

const post = props => (
  <article className="Post">
    <a href={props.url} >
      <h1 className="Titles">{props.title}</h1>
      <div className="Info">
        <div className="Author">Author: {props.author}</div>
      </div>
    </a>
  </article>
);

export default post;