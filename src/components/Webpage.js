import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Header from "./Header";

class Webpage extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <About />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
				<Header></Header>
				{this.renderPage()}
				<Footer/>
      </div>
    );
  }
}

export default Webpage;
