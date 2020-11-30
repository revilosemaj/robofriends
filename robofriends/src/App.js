import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots : robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield : event.target.value });
  }
  render() {
    const filteredSearchfields = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1' >robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredSearchfields}/>
      </div>
    );
  }
}

export default App;
