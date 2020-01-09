import React, { Component } from "react";
import CardList from "../Components/CardList";
import { robots } from "../Components/robots";
import Searchbox from "../Components/Searchbox";
import './App.css';
import Scroll from "../Components/Scroll";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){
            return <h1>Loading...</h1>
        } else {
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
        </div>
        
        
    );
        }    
    }
}

export default App;