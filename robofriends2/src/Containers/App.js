import React, {Component} from "react";
import Cardlist from "../Components/CardList";
import Searchbox from "../Components/Searchbox";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends Component{
    constructor(){
        super();
        this.state={
        robots:[],
        searchfield:"",
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce=>{
            return responce.json();
        })
        .then(users=>{this.setState({robots:users})});
    }

    onSearchChange= (event) =>{
        this.setState({searchfield:event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length===0){
            return(
                <h1>Loading</h1>
            )    
        }else{
        return(
            <div className="tc">
                <h1 className="f2">Robofriends</h1>
                <Searchbox onSearchChange={this.onSearchChange} ></Searchbox>
                <Scroll>
                    <Cardlist robots={filteredRobots}></Cardlist>
                </Scroll>
            </div>
        )
        }
    }
}
export default App;