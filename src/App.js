import React, { Component } from "react";
import CardList from "./CardList";
import { Robots } from "./Robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: Robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.Robots.filter((Robot) => {
      return Robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList Robots={filterRobots} />
      </div>
    );
  }
}

export default App;
