
import React, { Component } from "react"; 

interface State {
    hello: string
}

export default class LifeCycle extends Component<{}, State> { 
	constructor(props:any) 
	{ 
		super(props); 
		this.state = { hello : "World!" }; 
	} 

	componentWillMount() 
	{ 
		console.log("componentWillMount()"); 
	} 

	componentDidMount() 
	{ 
		console.log("componentDidMount()"); 
	} 

	changeState() 
	{ 
		this.setState({ hello : "Geek!" }); 
	} 

	render() 
	{ 
		return ( 
			<div> 
			<h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
			<h2> 
			<a onClick={this.changeState.bind(this)}>Press Here!</a> 
			</h2> 
			</div>); 
	} 

	shouldComponentUpdate(nextProps:any, nextState:any) 
	{ 
		console.log("shouldComponentUpdate()"); 
		return true; 
	} 

	componentWillUpdate() 
	{ 
		console.log("componentWillUpdate()"); 
	} 

	componentDidUpdate() 
	{ 
		console.log("componentDidUpdate()"); 
	} 
} 

