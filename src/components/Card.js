import React from "react";

function card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.heading}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.icon}</h6>
        <p className="card-text">{props.user.url}</p>
      </div>
    </div>
  );
}

export default card;
