import React, { Component } from 'react'
import Button from './Button'
import Title from './Title'
import Carousel from './Carousel'

export default class CarouselDiv extends Component {
	render() {
		return (
			<div className='carrousel-div'>
				<Title title="What We do" />
				
				<Carousel />
				
				<Button infoButton="More" />
			</div>
		)
	}
}
