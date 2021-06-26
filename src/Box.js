import React, { Component } from "react";

class Box extends Component {
	static defaultProps = {
		height: "20",
		width: "20",
		color: "slateblue"
	};
	render() {
		return (
			<div>
				<div
					style={{
						backgroundColor: this.props.color,
						width: `${this.props.width}em`,
						height: `${this.props.height}em`
					}}
				></div>
				<button onClick={this.props.handleClick}>X</button>
			</div>
		);
	}
}

export default Box;
