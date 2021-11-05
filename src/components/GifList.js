import React from "react";

export default function GifList(props) {
	// console.log(props);
	return (
		<div>
			<ul>
				{props.gifs.map((gif, i) => (
					<img src={gif} key={i} alt="gif" />
				))}
			</ul>
		</div>
	);
}
