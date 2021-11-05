import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
	state = {
		gifs: []
	};

	// componentDidMount(term) {
	// 	fetch(
	// 		`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=NfxsHUFcu430Bq29I4FgCoIrliL2l2rk`
	// 	)
	// 		.then((resp) => resp.json())
	// 		.then((data) => {
	// 			const gifs = data.data
	// 				.map((gif) => gif.images.original.url)
	// 				.slice(0, 3);
	// 			// return this.setState({ gifs: gifs }, () => {
	// 			// 	return <GifList gifs={this.state} />;
	// 			// });
	// 			this.setState({ gifs: gifs });
	// 		});
	// }

	handleSubmit = (term) => {
		// e.preventDefault();
		// console.log("clicked!");
		// this.componentDidMount(term);
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=NfxsHUFcu430Bq29I4FgCoIrliL2l2rk`
		)
			.then((resp) => resp.json())
			.then((data) => {
				const gifs = data.data
					.map((gif) => gif.images.original.url)
					.slice(0, 3);
				// return this.setState({ gifs: gifs }, () => {
				// 	return <GifList gifs={this.state} />;
				// });
				this.setState({ gifs: gifs });
			});
	};

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs} />
				<GifSearch handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}
