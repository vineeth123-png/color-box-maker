import React, { Component } from "react";
import Box from "./Box";

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [{ width: 10, height: 20, color: "orange" }]
		};
	}
	render() {
		const boxes = this.state.boxes.map((box, idx) => (
			<Box height={box.height} width={box.width} color={box.color} />
		));
		return <div>{boxes}</div>;
	}
}

export default BoxList;
