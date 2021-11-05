import React, { Component } from "react";

export default class GifSearch extends Component {
	state = {
		search: ""
	};

	handleSearch = (e) => {
		// e.preventDefault();
		// this.setState({ search: e.target.value }, () => console.log(this.state));
		this.setState({ search: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state.search);
	};

	render() {
		return (
			<div>
				<b>Enter a Search Term:</b>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={(e) => this.handleSearch(e)}
						value={this.state.search}
					></input>
					<input type="submit" value="Find Gifs"></input>
				</form>
			</div>
		);
	}
}
