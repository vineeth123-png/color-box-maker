import React, { Component } from "react";

class Box extends Component {
	static defaultProps = {
		height: "200px",
		width: "200px",
		color: "slateblue"
	};
	render() {
		return (
			<div>
				<div
					style={{
						backgroundColor: this.props.color,
						width: this.props.width,
						height: this.props.height
					}}
				></div>
				<button onClick={this.props.handleClick}>
					Remove this Box!
				</button>
			</div>
		);
	}
}

export default Box;
