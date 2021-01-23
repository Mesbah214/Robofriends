import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";
import { setSearchField } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  render() {
    const { Robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobots = Robots.filter((Robot) => {
      return Robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !Robots.length ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList Robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
