import React, { Component } from 'react'
import "@ptkdev/webcomponent-instagram-widget";

export default class Insta extends Component {

	
	
	render() {

		function instaRender () {
		const array = [];
		for(let index = 0; index <= 4; index += 1){
		 array.push(<img src={`https://profilepageimages.usecue.com/images/lune_dev/small/${index}.jpg`} alt={`Imagem ${index}`} className="instapost"/>)
		}
		return array
	}

		return (
			<div className='instagram-div'>
				<a id="instafeed" href="https://www.instagram.com/lune_dev">
				{instaRender()}
</a> 
			</div>
			
			
		)
	}
}


// criar uma div que dentro dessa div vai renderizar 12 quadrados para cada imagem
// da pra fazer com o loop for pq o parametro da jpg é um numero


{/* <img src="https://profilepageimages.usecue.com/images/lune_dev/small/0.jpg" alt='1'/>
  <img src="https://profilepageimages.usecue.com/images/lune_dev/small/1.jpg" alt='1'/>
  <img src="https://profilepageimages.usecue.com/images/lune_dev/small/2.jpg" alt='1'/>
  <img src="https://profilepageimages.usecue.com/images/lune_dev/small/3.jpg" alt='1'/>
  <img src="https://profilepageimages.usecue.com/images/lune_dev/small/4.jpg" alt='1'/> */}