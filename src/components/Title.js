import React, { Component } from 'react'

export default class Title extends Component {
	render() {
		const { aboutTitle } = this.props;
		return (
			<div className='title'>
				<h1>{ aboutTitle }</h1>
			</div>
		)
	}
}
