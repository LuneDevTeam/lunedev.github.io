import React, { Component } from 'react'
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from './Button';

const paragraphContent = `What we do, What we do,
What we do, What we do,
What we do, What we do,
What we do, What we do `;

export default class WelcomeSection extends Component {
	render() {
		return (
			<div className='welcome'>
			<Title aboutTitle="What We Do" className="welcome-title"/>
			<Paragraph paragraphContent={paragraphContent} />
			<Button infoButton="About Us" linkButton="https://www.google.com/"/>
			</div>
		)
	}
}


// TODO: Componente 1 - WelcomeSection
// TODO: uma div com bg que contém:
// TODO: um Title <h1> 
// TODO: uma section
// TODO: um button "About Us"


//<img src={bgimage} className='welcome-image' alt='Welcome' /> 