import React, { Component } from 'react'
import Button from './Button'
import Title from './Title'
import Carousel from './Carousel'

export default class CarouselDiv extends Component {
	render() {
		return (
			<div>
				<Title aboutTitle="What We do" />
				<div>
				<Carousel />
				</div>
				<Button infoButton="More" />
			</div>
		)
	}
}
