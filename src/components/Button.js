import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		const { linkButton, infoButton } = this.props;
		return (
			<div>
        <a href={linkButton}>
    			<button>{infoButton}</button>
				</a>
			</div>
		)
	}
}
