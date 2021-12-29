import React, { Component } from 'react'

export default class Title extends Component {
	render() {
		const { title } = this.props;
		return (
			<div className='title'>
				<h1>{ title }</h1>
			</div>
		)
	}
}
