import React from "react";

function Card(props) {
  return (
		<div class="card">
  <div class="card-body">
	<img src={props.image} className="d-black w-100"></img>
  </div>
</div>
		
      
  );
}

export default Card;
