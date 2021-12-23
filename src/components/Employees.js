import React, { Component } from 'react'

export default class Employees extends Component {
	render() {
		const { sourceImage, altText, employeeName, employeeDescription, className, linkedin } = this.props;
		return (
			<div className={ className }>
				<img src={sourceImage} alt={ altText } />
				<button type='button' id={altText}><a href={ linkedin } target="_blank" rel="noreferrer">Linkedin</a></button>
				<h3>{ employeeName }</h3>
				<section>{ employeeDescription }</section>
			</div>
		)
	}
}
