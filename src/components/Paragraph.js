import React, { Component } from 'react'

export default class Paragraph extends Component {
	render() {
		const { paragraphContent } = this.props;
		return (
			<div>
				<h2>{ paragraphContent }</h2>
			</div>
		)
	}
}
