import React from "react";
import "../style.css";
import Container from "../Container";
import Wrapper from "../Wrapper"
import Resume from "../assets/Resume 11-2020.pdf"

const About = () => (
	<Wrapper>
<Container>
<div className="card">
<h2 className="card-title">About Me:</h2>
  <div className="card-body">
	<img src="https://i.ibb.co/nrpjrRr/267-DAE0-B-22-EB-4-F44-BEAD-2-F0-BA052-F262.jpg"/>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis velit sed tristique hendrerit. 
		Nam ligula magna, luctus ac odio sed, congue lacinia magna. Proin ac aliquam est. Sed eros massa, bibendum 
		quis dapibus non, pulvinar ut nisi. Etiam at placerat sem, vitae congue lacus. Vivamus eu nisi vel sem dictum 
		sagittis vitae accumsan orci. Integer id pharetra erat, sit amet congue erat. Duis non lobortis quam. Cras 
		vulputate eleifend metus at euismod. Nulla facilisi. Suspendisse efficitur elit vel dictum consectetur. 
		Nullam non elementum tellus. Sed cursus ac quam in sollicitudin. Proin interdum tincidunt urna, ac porttitor diam aliquet quis.
		</p>
		<ul>
			<p>
						<i class="fas fa-mobile-alt"></i> Phone: 210-846-9497
						</p>
						<p>
						<i class="far fa-envelope"></i> Email: <a href="mailto: rudyg92289@gmail.com">rudyg92289@gmail.com</a></p>
					</ul>
  </div>
	</div>
	</Container>
	</Wrapper>
);

export default About;
