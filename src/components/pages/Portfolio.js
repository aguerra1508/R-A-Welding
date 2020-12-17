import React, { Component } from "react";
import Wrapper from "../Wrapper";
import projects from "../projects.json";
import Projects from "../Projects";
import Container from "../Container";
import "../style.css";

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
			<Wrapper>
				<Container>
				<div class="card">
				<h2 class="card-title">Portfolio:</h2>
				</div>
				{this.state.projects.map(project => (
          <Projects
            id={project.id}
            key={project.id}
						title={project.title}
						image={project.image}
          />
        ))}
				</Container>
				</Wrapper>
    );
  }
}

export default Portfolio;

