import React, { Component } from 'react'

export default class Title extends Component {
	render() {
		const { aboutTitle, className } = this.props;
		return (
			<div className={className}>
				<h1>{ aboutTitle }</h1>
			</div>
		)
	}
}
